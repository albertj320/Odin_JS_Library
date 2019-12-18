//store Book bojects in myLibrary array
//use render function, loop through the array and display each book on the page..
//can put a few fake books in the array to test render function
//new book button
//remove book button
//each book's display should have a "read" toggle button
//add persistence to the library app with 


// // Create an in-memory element to attach dynamically created elements to:
// let div = document.createElement("div");

// for(var i = 0; i < 10; i++) {
//   let item = document.createElement("div")
//   item.textContent = "div #" + i;
//   div.append(item); // Append to in-memory node, not the DOM
// }

// // Now inject the completed node just once to the DOM
// document.body.appendChild(div);

var libraryTable = document.querySelector("#libraryTable");
var newBook_btn = document.querySelector("#newBook");
var bookForm = document.querySelector("#bookForm");
var titleInput = document.querySelector("#title_form");
var authorInput = document.querySelector("#author_form");
var pagesInput = document.querySelector("#pages_form");
var readInput = document.querySelector("#read_form");
var formDiv = document.querySelector("#form_div");

var myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
};

const book1 = new Book('1Q84', 'Haruki Murakami', 924, true)
const book2 = new Book('Norwegian Wood', 'Haruki Murakami', 175, true)
myLibrary.push(book1, book2);

function addBooktoLibrary(){
    const newBook = new Book(`${titleInput.value}`,`${authorInput.value}`,`${pagesInput.value}`,`${readInput.value}`);
    myLibrary.push(newBook);
    renderTable(myLibrary, libraryTable);
};

function deleteBook(){
    //remove book from library
};

function renderTable(array, node){
    if (!node) return;
    let dataHTML = '';
    for (let e of array){
        dataHTML += `<tr><td>${e.title}</td><td>${e.author}</td>
        <td>${e.pages}</td><td>${e.read}</td></tr>`;
    }
    console.log(dataHTML);
    node.innerHTML = dataHTML;
};

// function renderCards(array, node){
//     let dataHTML = '';
//     for (let e of array){
//         dataHTML += //cards 
//     }
//     node.innerHTML = dataHTML;
// }

renderTable(myLibrary, libraryTable);

bookForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    addBooktoLibrary();
    formDiv.style.display = "none";
});

newBook_btn.addEventListener('click', (e) => {
    e.preventDefault();
    formDiv.style.display = "block";
  
});
