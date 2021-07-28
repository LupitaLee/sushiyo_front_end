


document.addEventListener('DOMContentLoaded', () => {
  Shop.getShops()
    getItems()
    
    // postItems()
    eventItems()
    addCreateform()
})



//--------------- new code ---------- fetch and render shop






    
// ------ new code fetch and render items -----


function getItems(){
    fetch("http://localhost:3000/api/shops")
    .then(res => res.json())
    .then(data => (
        data[0].items.forEach(item => renderItem(item)))
    .catch(error => console.error(error))
        
    )}


const image = document.querySelector("#image-container")



function renderItem(item){
    const img = document.createElement("img")
    img.src = item.image
    

    const h3 = document.createElement("h3")
    h3.innerHTML = item.title

    const h4 = document.createElement("h4")
    h4.innerHTML = `$ ${item.price}`

    const addBtn = document.createElement("button")
    addBtn.innerHTML = "add to cart"

    image.append(img,addBtn, h3,h4)
}




//---------- create form ---------

const formContainer = document.querySelector("#item-post-form")
const createForm = document.createElement("form")


function addCreateform(){
    
    createForm.innerHTML = `<p>Create your Own</p>
        <input id="title-input" type="text" placeholder="Name your roll"></input>
        <input id="image-input" type="text" placeholder="Image URL"></input>
        
        <label for="price"> $10.50 </label>
    
        <input id="submit" class="createbutton" type="submit" >`
        formContainer.append(createForm)

        // createForm.addEventListener("submit", postItems)
}





//------------------------post items and render -------



function eventItems(){
        // this should be its own function
        createForm.addEventListener("submit", function(e){
          
            e.preventDefault()
            const form = e.target
            const titleInput = form.querySelector("#title-input")
            const imageInput = form.querySelector("#image-input")
            postItems(titleInput, imageInput)
        })
            //--------
     
            // take this values and sent to db to create a new roll
            
}

     
function postItems(titleInput, imageInput){
    fetch("http://localhost:3000/api/shops/1/items", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",// we sennding it thru as jason to our back end
                    "Accept": "application/json" // we accepting json back from our backend
                },
                body: JSON.stringify({
                 
                   image: imageInput.value,
                    title:titleInput.value,
                    price: "10.50" // need to see if how im going to add a flat fee with out using user input
                })
            })
            .then(resp => resp.json())// this is the only time we get an implicit return in js written on one line arrow
            .then(item => {
                console.log('Success:', item)
              
             
                renderItem(item)

              })
              .catch((error) => {
                console.error('Error:', error)
              })

              titleInput.value = ""
              imageInput.value = ""
        }