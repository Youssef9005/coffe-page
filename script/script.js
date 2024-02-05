let spans = document.querySelectorAll("header .container .menu span");
let menu = document.querySelector("header .container .menu")
let nav = document.querySelector("header .container nav");
let xMark = document.querySelector(".x-mark")

menu.addEventListener("click" , function () {
    console.log("click")
    spans[1].classList.toggle("full");
    nav.classList.toggle("show");
    nav.style.left = "50%"
    xMark.onclick = function () {
        nav.classList.remove("show");
        spans[1].classList.remove("full");
    }
})