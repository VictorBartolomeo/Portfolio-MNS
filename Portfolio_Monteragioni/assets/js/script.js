window.onscroll = function () { navbarSticky() };

var navbar = document.getElementById("stickyNavbar");
var sticky = navbar.offsetTop;

function navbarSticky() {
    //sticky bar 
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }

}