let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = function(){
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
}

let searchForm = document.querySelector('.search_form');

document.querySelector('#search_btn').onclick = function () {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
}

let cart =document.querySelector(".cart-items-container")

document.querySelector('#cart_btn').onclick = function (){
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
}
