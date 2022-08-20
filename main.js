const menucito = document.querySelector('.desktop-menu')
const navEmail = document.querySelector('.navbar-email')

navEmail.addEventListener('click', toggleMenucito);

function toggleMenucito(){
    menucito.classList.toggle('innactive')
}