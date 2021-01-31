let burger = document.querySelector(".burger");
let navlist = document.querySelector(".nav-list");
let navbar = document.querySelector(".navbar");
let rightNav = document.querySelector(".rightNav");


burger.addEventListener("click",()=>{
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});