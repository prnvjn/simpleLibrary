/* let List = []
let btn = document.querySelector('#test')
let library = document.querySelector('#library')
let count = 0
function Book(title,author,pages,read){
   Book.counter++
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    
    }
Book.counter = 0
function addBookToLibrary(title,author,pages) {
  let y = new Book(title,author,pages,'NOT READ')
    List.push(y)
    return createBook(y)
}


btn.addEventListener('click',()=> {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    
    return addBookToLibrary(title,author,pages)    
  }
)

let createBook = (item)=> {
    
   let div = document.createElement('div')
    div.setAttribute('id','book')
    div.setAttribute('data',count)
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let num = document.createElement('p')
    let del = document.createElement('button')
    del.setAttribute('id','delete')
    del.textContent= "delete"
    h1.textContent = item.title
    h2.textContent = item.author
    num.textContent = item.pages
    div.appendChild(h1)
    div.appendChild(h2)
    div.appendChild(num)
    div.appendChild(del)
    library.appendChild(div)
    count +=1
}
 */
let myLibrary =[]
let submit = document.querySelector("#submit")
let library = document.querySelector("#library")
 function Book(title, author,pages,read){
  this.title = title
  this.author = author
  this.pages = pages
  if (read){
    this.read="read"
  }
  else{
    this.read="not read"
  }
 }

 const addBookToLibrary = (element)=> {
  let row = document.createElement('tr')
library.appendChild(row)
row.innerHTML =`<td>${element.title}</td>
<td>${element.author}</td>
<td>${element.pages}</td>
<td>${element.read}</td> 
<td> <button id="delete">Delete</button></td>
`



}


submit.addEventListener('click',() => {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').checked
   
    let submission = new Book(title,author,pages,read)
    myLibrary.push(submission)
    addBookToLibrary(submission)
    

})


const test1 =  new Book("hey","this","33",true)
myLibrary.push(test1)
addBookToLibrary(test1)





