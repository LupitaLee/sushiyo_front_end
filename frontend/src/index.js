
const imageContainer = document.querySelector("#image-container")

const formContainer = document.querySelector("#item-post-form")
const createForm = document.createElement("form")

const searchBar = document.querySelector('#searchBar')

// shop-container
const titleName = document.querySelector("#name")





document.addEventListener('DOMContentLoaded', () => {
  Shop.getShops()
  Shop.listenDysplay()




  Item.addCreateform()
    Item.eventItems()

    Item.search()

    Item.listenDelete()
   Item.like()

})









