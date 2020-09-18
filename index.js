const botonHamburguesa = document.querySelector("#menu-responsive")
const icono = document.querySelector('#icono');
const menuCelular = document.querySelector('.navegacion-hamb');
const scroll = document.querySelector('.no-scroll')
console.log(botonHamburguesa, menuCelular)

botonHamburguesa.onclick = () => {

    
    icono.classList.toggle('fa-bars');
    icono.classList.toggle('fa-window-close');
    menuCelular.classList.toggle('mostrar-menu')
    scroll.classList.add('.no-scroll')
    console.log('hola')
}