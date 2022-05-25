const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const magnifier = document.querySelector('.fa-magnifying-glass')
const search = document.querySelector('.search')
const menuMobile = document.querySelector('.menu-mobile')

const burgerTop = document.querySelector('.burger-top')
const burgerMiddle = document.querySelector('.burger-middle')
const burgerBottom = document.querySelector('.burger-bottom')

magnifier.addEventListener('click', () => {
	search.classList.toggle('hidden')
	menu.classList.toggle('md:flex')
})

burger.addEventListener('click', () => {
	burger.classList.toggle('open')
	burgerTop.classList.toggle('burger-white')
	burgerMiddle.classList.toggle('burger-white')
	burgerBottom.classList.toggle('burger-white')
	menuMobile.classList.toggle('hidden')
})
