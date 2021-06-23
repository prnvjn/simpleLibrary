let myLibrary = [];
let List = []
let btn = document.querySelector('#test')
let library = document.querySelector('#library')

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    }

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
    
}



