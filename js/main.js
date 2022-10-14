var language = window.navigator.language || window.navigator.userLanguage
console.log(language)
const button = document.querySelector('.langSwitcher')
button.addEventListener("click",changeLang)
if(language.startsWith('es')) {
    changeLang()
}


function changeLang() {
    document. documentElement. setAttribute("lang", 'es')
const p1 = document.querySelector('.p1')
p1.textContent = 'Hola a todos, yo soy'

document.querySelector('.li1').textContent = 'Inicio'
document.querySelector('.li2').textContent = 'Información'
document.querySelector('.li3').textContent = 'Trabajos'
document.querySelector('.li4').textContent = 'Contacto'


const p2 = document.querySelector('.p2')
p2.innerHTML = 'Soy <span>desarrollador frontend</span> y <span>diseñador UX / UI</span>'
document.querySelector('.quote').textContent = '´´Si puedes imaginarlo, puedes crearlo´´'
document.querySelector('.button').textContent = 'Contactame'
document.querySelector('.h2about').textContent = '¿Quien soy?'

document.querySelector('.downloadcv').textContent = 'Descargar CV'
document.querySelector('.skills').textContent = 'Conocimientos'
document.querySelector('.plearning').textContent = 'todos los dias aprendiendo'
document.querySelector('.works').textContent = 'Mis trabajos'
document.querySelector('.pworks').textContent = 'Tu pagina podria estar aca, que estas esperando?'
}