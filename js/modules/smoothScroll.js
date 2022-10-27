document.querySelector('.li1').addEventListener('click', function(event){
    event.preventDefault()
    scrollTo('.header')
})
document.querySelector('.li2').addEventListener('click', function(event){
    event.preventDefault()
    scrollTo('.about')
})
document.querySelector('.li3').addEventListener('click', function(event){
    event.preventDefault()
    scrollTo('.portfolio')
})
document.querySelector('.li4').addEventListener('click', function(event){
    event.preventDefault()
    scrollTo('.contact')
})
export function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior:'smooth' });
}
