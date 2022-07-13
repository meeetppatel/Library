let library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const formcontainer = document.getElementById("addbookcontainer");
const closebtn = document.getElementById("close-btn");
const addbookbtn = document.getElementById("add-book-btn");
const submitbookbtn = document.getElementById("submitbtn");
const form = document.getElementById("form")

formcontainer.style.display = "none";

addbookbtn.addEventListener("click", () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  formcontainer.style.display = "block";
});

closebtn.addEventListener("click", () => {
  formcontainer.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleEle = document.getElementById("title").value;
  const authorEle = document.getElementById("author").value;
  const pagesEle = document.getElementById("pages").value;
  const checkboxEle = document.getElementById("isRead").value;
  console.log(titleEle, authorEle, pagesEle, checkboxEle);

  addbooktolibrary(
    `${titleEle}`,
    `${authorEle}`,
    `${pagesEle}`,
    checkboxEle.checked
  );
});

function addbooktolibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  library.push(book);
  formcontainer.style.display = "none";
  addbooks();
}
const booksgrid = document.getElementById("booksgrid");

function addbooks() {
  library.forEach((book) => {
    const bookdiv = document.createElement("div");
    const booktitle = document.createElement("div");
    const bookauthor = document.createElement("div");
    const bookpages = document.createElement("div");
    const isreadbtn = document.createElement("button");
    const removebook = document.createElement("button");

    bookdiv.classList.add("book");
    booktitle.classList.add("book-title");
    booktitle.innerHTML = "Book: " + book.title;

    bookauthor.classList.add("book-author");
    bookauthor.innerHTML = "Author: " + book.author;

    bookpages.classList.add("pages");
    bookpages.innerHTML = "pages" + book.pages;

    isreadbtn.classList.add("readbtn");
    if (book.isRead === true) {
      isreadbtn.innerHTML = "read";
    } else {
      isreadbtn.innerHTML = "not read";
    }

    isreadbtn.addEventListener("click", () => {
      if (!book.isRead) {
        book.isRead = true;
        isreadbtn.innerHTML = "read";
      } else {
        book.isRead = false;
        isreadbtn.innerHTML = "not read";
      }
    });

    removebook.classList.add("removebtn");
    removebook.innerHTML = "Remove";
    removebook.addEventListener("click", removebook);

    bookdiv.appendChild(booktitle);
    bookdiv.appendChild(bookauthor);
    bookdiv.appendChild(bookpages);
    bookdiv.appendChild(isreadbtn);
    bookdiv.appendChild(removebook);

    booksgrid.appendChild(bookdiv);
  });
}

function removebook() {
  pass;
}
