// Examine the DOCUMENT OBJECT
// console.dir(document)
/* console.log(document.domain)
console.log(document.URL)
console.log(document.title)
document.title = 'Alf\'s Page'
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[10])
console.log(document.forms)
console.log(document.images)
const titulo = document.getElementById('header-title')
console.log(titulo)

const titulo = document.getElementById('header-title')
const mainHeader = document.getElementById('main-header')
titulo.textContent = 'h o l a'
titulo.innerText = 'hOlA'
titulo.innerHTML = '<h4>Hola h4</h4>'
console.log(titulo)
mainHeader.style.borderBottom = 'solid 3px #000'

// Getting elements by class name  GETELEMENTSBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[2])
items[1].innerHTML = 'Hacked by alf'
items[2].style.fontWeight = 'bold'

// to change an atribute on all, you must go thru each one
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f4f4f4'
}

// GETELEMENTSBYTAGNAME //
var items = document.getElementsByTagName('li')
// console.log(items)
// console.log(items[2])
items[1].innerHTML = 'Hacked by alf'
items[2].style.fontWeight = 'bold'

// to change an atribute on all, you must go thru each one
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#4a4a4a'
}

// QUERYSELECTOR //

var header = document.querySelector('#list-group-item')
console.log(header)

var enter = document.querySelector('input')
enter.value = 'Hahaha!'

var submit = document.querySelector('input[type="submit"]')
submit.value = 'Send it >'

// querySelectorAll()
var myTitles = document.querySelectorAll('.title')
// console.log(myTitles)
myTitles[1].textContent = 'Cambio el titulo aqui'

var odds = document.querySelectorAll('li:nth-child(odd)')
for (let i = 0; i < odds.length; i++) {
  odds[i].style.backgroundColor = 'dodgerblue'
}

// TREVERSING THE DOM
// .parentNode
// var itemList = document.querySelector('#items')
// the parent is the div "main" so we change the background color of all the card
// itemList.parentNode.style.backgroundColor = 'blanchedAlmond'

// .parentElement  works in the same way as parentNode
var itemList = document.querySelector('#items')
// the parent is the div "main" so we change the background color of all the card
itemList.parentElement.style.backgroundColor = 'IndianRed'

// childNodes
console.log(itemList.childNodes)
// children
console.log(itemList.children)
var childrenItems = itemList.children
childrenItems[0].style.color = 'Olive'
childrenItems[0].style.fontWeight = 'Bold'

// firstChild
console.log(itemList.firstChild)
itemList.firstElementChild.textContent = 'Boobies'
*/
// siblings
// better to use
// .firstElementChild .lastElementChild .nextElementSibling .previousElementSibling
