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

formcontainer.style.display = "none";




addbookbtn.addEventListener("click", () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  formcontainer.style.display = "block";
});

closebtn.addEventListener("click", () => {
    formcontainer.style.display = "none";
})