let library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

window.addEventListener("DOMContentLoaded", () => {
  getlocal();
});

const formcontainer = document.getElementById("addbookcontainer");
const closebtn = document.getElementById("close-btn");
const addbookbtn = document.getElementById("add-book-btn");
const submitbookbtn = document.getElementById("submitbtn");
const form = document.getElementById("form");
const booksgrid = document.getElementById("booksgrid");

formcontainer.style.display = "none";

addbookbtn.addEventListener("click", () => {
  formcontainer.style.display = "block";
  form.reset();
});

closebtn.addEventListener("click", () => {
  formcontainer.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btitle = document.getElementById("title").value;
  const bauthor = document.getElementById("author").value;
  const pagescount = document.getElementById("pages").value;
  const checkbox = document.getElementById("isRead").checked;
  console.log(btitle, bauthor, pagescount, checkbox);
  addbooktolibrary(btitle, bauthor, pagescount, checkbox);
});

function addbooktolibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  library.push(book);
  formcontainer.style.display = "none";
  saveLocal();
  getlocal();
  addbooks();
}

// function readbtncolor() {
//   if (book.isRead === true) {
//     isreadbtn.style.backgroundColor = "red";
//   } else {
//     isreadbtn.style.backgroundColor = "green";
//   }
// }

function addbooks() {
  let bookid = 0;
  let allbooks = document.querySelectorAll(".book");
  allbooks.forEach((Book) => {
    Book.remove();
  });

  library.forEach((book) => {
    const bookdiv = document.createElement("div");
    const booktitle = document.createElement("div");
    const bookauthor = document.createElement("div");
    const bookpages = document.createElement("div");
    const isreadbtn = document.createElement("button");
    const removebook = document.createElement("button");

    bookdiv.classList.add("book");
    booktitle.classList.add("book-title");
    booktitle.innerHTML = "Book : " + book.title;

    bookauthor.classList.add("book-author");
    bookauthor.innerHTML = "Author : " + book.author;

    bookpages.classList.add("pages");
    bookpages.innerHTML = "pages : " + book.pages;

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
      readbtncolor(book.isRead,isreadbtn);
    });
    readbtncolor(book.isRead,isreadbtn);

    removebook.classList.add("removebtn");
    removebook.innerHTML = "remove";
    removebook.addEventListener("click", removebooks);

    bookdiv.appendChild(booktitle);
    bookdiv.appendChild(bookauthor);
    bookdiv.appendChild(bookpages);
    bookdiv.appendChild(isreadbtn);
    bookdiv.appendChild(removebook);

    booksgrid.appendChild(bookdiv);

    // remove books fn
    bookdiv.dataset.bookID = bookid;
    removebook.dataset.bookID = bookid;
    isreadbtn.dataset.bookID = bookid;

    console.log(bookid);

    function removebooks() {
      library.splice(removebook.dataset.bookID, 1);
      addbooks();
      saveLocal();
    }

    bookid++;
    saveLocal();
    readbtncolor();

    
  });
}

function readbtncolor(read, btn) {
  if(read)btn.style.backgroundColor ="rgb(149, 247, 149)";
  else btn.style.backgroundColor="rgb(247, 149, 149)";
}

const saveLocal = () => {
  localStorage.setItem("books", JSON.stringify(library));
};

function getlocal() {
  if (localStorage.getItem("books")) {
    let items = JSON.parse(localStorage.getItem("books"));
    library = items;
    addbooks();
    console.log("exist");
  } else {
    console.log("doesn't exist");
  }
}
