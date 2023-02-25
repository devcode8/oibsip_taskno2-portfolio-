const nav = document.querySelector("nav");

window.addEventListener("scroll",function(){
    nav.classList.toggle("scroll",window.scrollY>0);
});