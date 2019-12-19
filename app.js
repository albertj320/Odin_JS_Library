//each book's display should have a "read" toggle button
//add persistence to the library app with firebase


var libraryTable = document.querySelector("#libraryTable");
var newBook_btn = document.querySelector("#newBook");
var bookForm = document.querySelector("#bookForm");
var titleInput = document.querySelector("#title_form");
var authorInput = document.querySelector("#author_form");
var pagesInput = document.querySelector("#pages_form");
var readInput = document.querySelector("#read_form");
var formDiv = document.querySelector("#form_div");

var myLibrary = JSON.parse(localStorage.getItem("library"));

function setStorage(){
    localStorage.setItem("library", JSON.stringify(myLibrary));
};

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;   
};

Book.prototype.index = function(){
   return myLibrary.findIndex((e) => e.title === this.title);
}

function deleteBook(e){
    myLibrary.splice(e,1);
    renderTable(myLibrary, libraryTable);
    setStorage();
};

function toggleRead(e){
    console.table(myLibrary[e]);
    if (myLibrary[e].read == true || myLibrary[e].read == "true"){
        myLibrary[e].read = false;
    } else if (myLibrary[e].read == false || myLibrary[e].read == "false") {
        myLibrary[e].read = true;
    }
    loadButtonState();
    setStorage();
}

function loadButtonState(){
    myLibrary.forEach((e) => {
        if(e.read == true || e.read == 'true'){
            document.querySelector(`#btn${myLibrary.indexOf(e)}`).style.opacity = "1.0";
        } else if(e.read == false || e.read == 'false') {
            document.querySelector(`#btn${myLibrary.indexOf(e)}`).style.opacity = "0.3";
        }
    });
};

// const book1 = new Book('1Q84', 'Haruki Murakami', 924, true)
// const book2 = new Book('Norwegian Wood', 'Haruki Murakami', 175, false)
// const book3 = new Book('Kafka on the Shore', 'Haruki Murakami', 225, false)
// myLibrary.push(book1, book2, book3);

function addBooktoLibrary(){
    const newBook = new Book(`${titleInput.value}`,`${authorInput.value}`,
    `${pagesInput.value}`,`${readInput.value}`);
    myLibrary.push(newBook);
    renderTable(myLibrary, libraryTable);
    loadButtonState();
    setStorage();
};

function renderTable(array, node){
    if (!node) return;
    let dataHTML = '';
    for (let e of array){
        dataHTML += `<tr><td>${e.title}</td>
        <td>${e.author}</td>
        <td>${e.pages}</td>
        <td><input type="button" id="btn${array.indexOf(e)}" value="Read" class="read_btn" 
        onclick="toggleRead(${array.indexOf(e)})"/>
        <input type="button" id="delete${array.indexOf(e)}" value="x" class="delete_btn" 
        onclick="deleteBook(${array.indexOf(e)})"/></td></tr>`;
    }
    node.innerHTML = dataHTML;
    loadButtonState();
};


renderTable(myLibrary, libraryTable);

bookForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    addBooktoLibrary();
    formDiv.style.display = "none";
    loadButtonState();
    //clear form
});

newBook_btn.addEventListener('click', (e) => {
    e.preventDefault();
    formDiv.style.display = "block";
});


// function renderCards(array, node){
//     let dataHTML = '';
//     for (let e of array){
//         dataHTML += //cards 
//     }
//     node.innerHTML = dataHTML;
// }