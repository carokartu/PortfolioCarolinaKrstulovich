const botonHamburguesa = document.querySelector("#menu-responsive")
const icono = document.querySelector('#icono');
const menuCelular = document.querySelector('.navegacion-hamb');
const scroll = document.querySelector('.no-scroll')


botonHamburguesa.onclick = () => {

    
    icono.classList.toggle('fa-bars');
    icono.classList.toggle('fa-window-close');
    menuCelular.classList.toggle('mostrar-menu')
    scroll.classList.add('.no-scroll')
    console.log('hola')
}


// seccion proyectos 

const proyectos = document.querySelectorAll(".tarjeta-proyectos")
const botonesFiltro = document.querySelectorAll(".boton")

console.log(botonesFiltro)

for (let boton of botonesFiltro) {
    boton.onclick = () => {
       
        for (let proyecto of proyectos){    
           
           
        if (boton.dataset.name === proyecto.dataset.name) {
            proyecto.classList.remove("hidden")
        }
        else if (boton.dataset.name ==="todos") {
            proyecto.classList.remove("hidden")
        }
        else {
            proyecto.classList.add("hidden")
        }


    }
  }
    
}
