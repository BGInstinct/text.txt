var coll = document.getElementsByClassName("burger-menu");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function chall_pdf() {
  window.location.href = "";
}

function chall_repo() {
  window.location.href = "https://github.com";
}

function main_fb() {
  window.location.href = "pages/f-b/f-b.html";
}