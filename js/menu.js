const hamburguesa=document.querySelector('.menuico');
const menu=document.querySelector('.menu-navegacion');

hamburguesa.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})