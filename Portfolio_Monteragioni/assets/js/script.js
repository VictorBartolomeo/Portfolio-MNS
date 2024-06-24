window.onscroll = function () { navbarSticky() };

var navbar = document.getElementById("stickyNavbar");
var sticky = navbar.offsetTop;

function navbarSticky() {
    //sticky bar 
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("backgroundSticky");
    }
    else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("backgroundSticky");
    }

}
