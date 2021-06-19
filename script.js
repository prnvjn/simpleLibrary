let myLibrary = [];

let btn = document.querySelector('#test')
function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}


btn.addEventListener('click',()=> {
    let title = document.querySelector('#title').value
let author = document.querySelector('#author').value
let pages = document.querySelector('#pages').value
    console.log(`${title} by ${author} is of ${pages} pages`)
}
)

