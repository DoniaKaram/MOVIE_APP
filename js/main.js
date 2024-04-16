let header=document.querySelector('header');
let menu=document.querySelector('.menu');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    navbar.classList.toggle("active")
}
window.onscroll=()=>{
    navbar.classList.remove("active")
}
window.addEventListener('scroll',()=>{
    header.classList.toggle("show",window.scrollY>0);
    navbar.classList.toggle("show",window.scrollY>0);
});