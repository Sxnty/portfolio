var language = window.navigator.language || window.navigator.userLanguage
console.log(language)
const button = document.querySelector('.langSwitcher')
button.addEventListener("click",changeLang)

export function changeLang() {
document. documentElement. setAttribute("lang", 'es')
const p1 = document.querySelector('.p1')
p1.textContent = 'Hola a todos, yo soy'

document.querySelector('.li1').textContent = 'Inicio'
document.querySelector('.li2').textContent = 'Información'
document.querySelector('.li3').textContent = 'Trabajos'
document.querySelector('.li4').textContent = 'Contacto'
button.textContent = 'English'

const p2 = document.querySelector('.p2')
p2.innerHTML = 'Soy <span>desarrollador frontend</span> y <span>diseñador UX / UI</span>'

const about1 = document.querySelector('.pabout')
about1.textContent = 'Soy un apasionado de mi trabajo. Porque amo lo que hago, tengo una fuente constante de motivación que me impulsa a dar lo mejor de mí. En mi último trabajo, esta pasión me llevó a desafiarme a mí mismo diariamente y aprender nuevas habilidades que me ayudaron a hacer mejor mi trabajo.'

document.querySelector('.pabout2').textContent = 'Como diseñador web, mi objetivo es generar un impacto positivo en los clientes y en Internet utilizando mis habilidades para diseñar sitios web útiles y atractivos.'
document.querySelector('.quote').textContent = '´´Si puedes imaginarlo, puedes crearlo´´'
document.querySelector('.button').textContent = 'Contactame'
document.querySelector('.h2about').textContent = '¿Quien soy?'

document.querySelector('.downloadcv').textContent = 'Descargar CV'
document.querySelector('.skills').textContent = 'Conocimientos'
document.querySelector('.plearning').textContent = 'todos los dias aprendiendo'
document.querySelector('.works').textContent = 'Mis trabajos'
document.querySelector('.pworks').textContent = 'Tu pagina podria estar aca, que estas esperando?'
}