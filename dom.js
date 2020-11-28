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

// siblings
// better to use
// .firstElementChild .lastElementChild .nextElementSibling .previousElementSibling

// createElement
// create a new div
var newDiv = document.createElement('div')
newDiv.className = 'hello'
newDiv.id = 'aNewDiv'
newDiv.style.color = 'Midnightblue'
// we have an empty div, so add a textNode
// create textNode, then append to our newDiv
var newDivText = document.createTextNode('Hallo meine frau!')
newDiv.appendChild(newDivText)

// now put the object just below the header container  'Item Lister'
// get where to put it
var container = document.querySelector('header .container') // insert here
var h1 = document.querySelector('header h1') // before this element
container.insertBefore(newDiv, h1)
console.log(newDiv)

HANDLING EVENTS with JS
document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick (e) {
  console.log('button has been clicked')
  console.log(e)
  console.log(e.target)
  console.log(e.target.id)
  console.log(e.target.classList) // gives array of the css token for the button
  var output = document.getElementById('output')
  output.innerHTML = e.offsetX + ', ' + e.offsetY
  looking at the mouse position when clicked
  e.clientX  e.clientY  are with respect to the window of the browser
  these are inside the object clicked
  console.log(e.offsetX + ', ' + e.offsetY)
}

var button = document.getElementById('button')
var myBox = document.getElementById('mybox')
// myBox.addEventListener('mouseenter', runEvent) // only runs when entering the box
// myBox.addEventListener('mouseover', runEvent) // runs even if inside box, but over an element
myBox.addEventListener('mousemove', runEvent)

myBox.addEventListener('mouseleave', runEvent)
// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

var output = document.getElementById('output')
function runEvent (e) {
  console.log('EVENT TYPE: ' + e.type)
  // console.log(e.relatedTarget) // can show where we're over, careful might give errors
  output.innerHTML = '<b>' + e.offsetX + ', ' + e.offsetY + '</b>'
  if (e.type === 'mouseleave') { output.innerHTML = ','}
}
*/

// Accesing our input field
var output = document.getElementById('output')
// var itemInput = document.querySelector('input[type="text"]') // we only have one of type text
var form = document.querySelector('form') // we only have one
// var selector = document.querySelector('select') // get the combobox

// itemInput.addEventListener('keyup', runEvent)
// selector.addEventListener('change', runEvent)

// and now, the SUBMIT form EVENT
form.addEventListener('submit', (e) => { e.preventDefault() })
// prevent from submiting the form as usual
