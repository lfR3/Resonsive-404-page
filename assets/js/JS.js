
const navBtn = document.querySelector(".nav-btn"),
    navList = document.querySelector(".nav-list");

navBtn.addEventListener('click', ()=>{

    navList.classList.toggle('show');
    navBtn.classList.toggle('act')
})