//
var open_button = document.getElementById("open-link");
open_button.addEventListener("click", function () {
  open_menu();
});

var close_button = document.getElementById("close-link");
close_button.addEventListener("click", function () {
  close_menu();
});

function open_menu() {
  document.getElementById("nav-items").style.transform = "translateY(0px)";
  links.forEach(function (link) {
      link.style.cssText  = "opacity: 1 ; transition: opacity 0.8s; transition-delay: 0.5s;" ;
  });
}
function close_menu() {
  document.getElementById("nav-items").style.transform = "translateY(-100vh)";
  links.forEach(function (link) {
    link.style.cssText  = "opacity: 0 " ;
});
}
//
var links = document.querySelectorAll(".nav-item");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    remove_active();
    link.classList.add("active-link");
  });
});

function remove_active() {
  for (var a = 0; a < links.length; a++) {
    links[a].classList.remove("active-link");
  }
}
