/* write a function that will retrieve all of the stored accessories.*/

let d = 1

function getelementSession(i) {
  if (sessionStorage.getItem('accessory' + i) == null) {} else {
    accessories = JSON.parse(sessionStorage.getItem('accessory' + i))
    return accessories
  }
}



/*Write a function displayWishlist() in the new JavaScript file that will
render each of the stored accessories on the wishlist.html page instead of the
static hat components that are included in that file. This function will need to use
the function from the previous task first. This might be an opportunity to create several
smaller functions that are called within displayWishlist()*/

function displayAccessory(element) {
  let text = [
    document.createTextNode(element.price),
    document.createTextNode(element.name),
    document.createTextNode(element.color),
    document.createTextNode("Remove"),
    document.createTextNode("Couleur:")
  ];
  let div1 = document.createElement('div')
  div1.className = "col-sm-4"
  let div2 = document.createElement('div')
  div2.className = "card my-3"
  let div3 = document.createElement('div')
  div3.className = "currency btn btn-light disabled"
  div3.appendChild(text[0])
  let div4 = document.createElement('div')
  div4.className = "card-body text-center"
  let image = document.createElement('img')
  image.className = "card-img-top"
  image.src = element.imageHref
  image.alt = "Image of baseball cap"
  let h5 = document.createElement('h5')
  h5.className = "card-title"
  h5.appendChild(text[1])
  let paragraphe = document.createElement('p')
  paragraphe.className = "card-text"
  paragraphe.appendChild(text[4])
  let button = document.createElement('button')
  button.className = "btn btn btn-outline-danger"
  button.value = "accessory" + d
  d++
  button.appendChild(text[3])
  let em = document.createElement('em')
  em.appendChild(text[2])
  div1.appendChild(div2)
  div2.appendChild(div3)
  div2.appendChild(image)
  div2.appendChild(div4)
  div4.appendChild(h5)
  div4.appendChild(paragraphe)
  paragraphe.appendChild(em)
  div4.appendChild(button)
  let product = document.getElementById('products')
  product.appendChild(div1)
}

function displayWishlist() {
  for (i = 1; i <= sessionStorage.length; i++) {
    accessory = getelementSession(i)
    displayAccessory(accessory)
  }
}
displayWishlist()



/*function removeFromWishlist(key, htmlComponent) that will accept a storage
key and an HTML element. The function will remove the accessory stored for the given
 key and also remove the HTML element from the DOM. Bind this function to each "Remove"
 button rendered in the wishlist,
passing the correct key to the button*/

function removeFromWishlist(key, htmlComponent) {
  let parentelement = htmlComponent.parentNode.parentNode.parentNode
  parentelement.parentNode.removeChild(parentelement)
  sessionStorage.removeItem(key)
}


let btndeletes = document.getElementsByClassName("btn btn btn-outline-danger")
for (i = 0; i < btndeletes.length; i++) {
  btndeletes[i].addEventListener('click', function(e) {
    removeFromWishlist(e.currentTarget.value, e.currentTarget)
  })
}
