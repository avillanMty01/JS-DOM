// PART 4 of tutorial - an App  HTML. Bootstrap, JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // adding items to our list
  var form = document.getElementById('addForm')
  var itemList = document.getElementById('items')
  var filter = document.getElementById('filter')

  // form submit event
  form.addEventListener('submit', addItem)
  // form submit event
  itemList.addEventListener('click', removeItem)
  // form submit event
  filter.addEventListener('keyup', filterItems)

  function addItem (e) {
    e.preventDefault()
    const newItem = document.getElementById('item') // what user typed
    const itemValue = newItem.value
    if (itemValue !== '') {
      // create new li
      var li = document.createElement('li')
      li.className = 'list-group-item'
      li.appendChild(document.createTextNode(itemValue))
      var deleteBtn = document.createElement('button')
      deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
      deleteBtn.appendChild(document.createTextNode('X'))
      li.appendChild(deleteBtn)
      itemList.appendChild(li)
      // empty field
      newItem.value = ''
    }
  }

  function removeItem (e) {
    if (e.target.classList.contains('delete')) {
      if (window.confirm('Are you sure?')) {
        const li = e.target.parentElement
        itemList.removeChild(li)
      }
    }
  }

  function filterItems (e) {
    const text = e.target.value.toLowerCase()
    var items = itemList.getElementsByTagName('li')
    // we need to convert to array
    Array.from(items).forEach(item => {
      var itemName = item.firstChild.textContent
      if (itemName.toLowerCase().indexOf(text) !== -1) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  }
  // // // // //
}) // end JS //
