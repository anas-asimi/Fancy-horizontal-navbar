//
var links = document.querySelectorAll(".nav-item");
//
var open_button = document.querySelector("#open-link");
open_button.addEventListener("click", function () {
  open_menu();
});

var close_button = document.querySelector("#close-link");
close_button.addEventListener("click", function () {
  close_menu();
});

function open_menu() {
  document.querySelector(".nav-items").classList.remove("close");
  document.querySelector(".nav-items").classList.add("open");
  setTimeout(function () {
    links.forEach(function (link) {
      link.style.opacity = "1";
    });
  }, 500);
}

function close_menu() {
  document.querySelector(".nav-items").classList.remove("open");
  document.querySelector(".nav-items").classList.add("close");
  setTimeout(function () {
    links.forEach(function (link) {
      link.style.opacity = "0";
    });
  }, 500);
}
//

links.forEach(function (link) {
  link.addEventListener("click", function () {
    remove_active();
    link.classList.add("active-link");
    close_menu();
  });
});

function remove_active() {
  for (var a = 0; a < links.length; a++) {
    links[a].classList.remove("active-link");
  }
}
