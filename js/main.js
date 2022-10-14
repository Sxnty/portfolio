var language = window.navigator.language || window.navigator.userLanguage
console.log(language)

const button = document.querySelector('.button')
button.addEventListener("click",changeLang)

function changeLang() {
const p1 = document.querySelector('.p1')
p1.textContent = 'asdasd'
}