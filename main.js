var open_button = document.getElementById('open-link') ;
open_button.addEventListener("click", function () { open_menu() }) ;

var close_button = document.getElementById('close-link') ;
close_button.addEventListener("click", function () { close_menu() }) ;

function open_menu() {
    document.getElementById('nav-items').style.transform= 'translateY(0px)';
}

function close_menu() {
    document.getElementById('nav-items').style.transform= 'translateY(-100vh)';
}