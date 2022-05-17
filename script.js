`strict`

const booktitle = document.getElementById(`user_book`);
const bookauthor = document.getElementById(`book_author`);
const bookpages = document.getElementById(`pages`);
const bookread = document.getElementById(`user_read`);
const boxes = document.querySelector(".container");
const submit = document.getElementById("submit");
const card = document.querySelector(".card");
const boxTitle = document.querySelector(".box-title");
const boxAuthor = document.querySelector(".box-author");
const boxPages = document.querySelector(".box-pages");
const boxRead = document.querySelector(".box-read")
const boxDelete = document.querySelector(".delete");
let myLibrary = [];
let currentBook;
let targetBook;
let targetCard;

console.log(card);

submit.onclick = function() {
    if (booktitle.value && bookauthor.value && bookpages.value) {
        addBookToLibrary();
        console.log(myLibrary);
        clearForms();
        makeCards();
        return false;
    }
}

function makeCards() {
    let deleteIndex;
    deleteIndex = myLibrary.findIndex(cardConstructor);
    myLibrary.splice(deleteIndex);
}

function cardConstructor(item, index, arr) {

    targetBook = myLibrary[index]
    targetCard = card.cloneNode(true);
    targetCard.children[0].innerHTML = `${targetBook.title}`
    targetCard.children[1].innerHTML = `${targetBook.author}`
    targetCard.children[2].innerHTML = `${targetBook.pages}`
    targetCard.children[3].innerHTML = `${targetBook.read}`
    boxes.appendChild(targetCard);
    targetCard.classList.remove(`hidden`);
    targetCard.classList.add(`width`)
}



function clearForms() {
    booktitle.value = ""
    bookauthor.value = ""
    bookpages.value = ""
    bookread.value = "off"
}


class Book {
    constructor() {
        this.title = booktitle.value;
        this.author = bookauthor.value;
        this.pages = bookpages.value;
        this.read = bookread;
    }
}

function addBookToLibrary() {
    currentBook = new Book()
    myLibrary.push(currentBook);
}