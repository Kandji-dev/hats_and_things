/* simple JavaScript object that represents a hat, with properties
 name, price, color, and imageHref. Attach a function toString() to the
  object that will return a String that nicely formats the properties of the hat object i.e. "<name>, color <color>, price: <price>, image: <imageHref>".
You can test this object using console.log() */

let hat = {
  name: 'Baseball Cap',
  price: 11.99,
  color: 'blue',
  imageHref: '../images/blue/hats/1.png'
}

hat.toString()



/*prototype for a Hat that can be used to construct the object from the previous task. T
he prototype
will need to set the property of a hat: name, price, color, and imageHref */

function createAccessory(name, price, color, imageHref) {
  this.name = name,
    this.price = price,
    this.color = color,
    this.imageHref = imageHref,
    this.toString()
}



/*Define an array of hat objects using the
Hat prototype that represent all of the hats in the static HTML */

hat1 = new createAccessory('Baseball Cap', 11.99, ' blue', './assets/images/blue/hats/1.png');
hat2 = new createAccessory('Baseball Cap', 11.99, ' green', './assets/images/green/hats/1.png');
hat3 = new createAccessory('Baseball Cap', 11.99, ' red', './assets/images/red/hats/1.png');
hat4 = new createAccessory('Baseball Cap', 11.99, ' yellow', './assets/images/yellow/hats/1.png');
hat5 = new createAccessory('Beanie', 17.99, ' red', './assets/images/red/hats/2.png');
hat6 = new createAccessory('Beanie', 17.99, ' blue', './assets/images/blue/hats/2.png');
hat7 = new createAccessory('Beanie', 17.99, ' green', './assets/images/green/hats/2.png');
hat8 = new createAccessory('Straw hat', 10.99, ' yellow', './assets/images/yellow/hats/3.png');
hat9 = new createAccessory('Straw hat', 10.99, ' blue', './assets/images/blue/hats/3.png');
hat10 = new createAccessory('Triby', 10.99, ' red', './assets/images/red/hats/4.png');
hat11 = new createAccessory('Triby', 10.99, ' blue', './assets/images/blue/hats/4.png');
hat12 = new createAccessory('Triby', 10.99, ' yellow', './assets/images/yellow/hats/4.png');

let tabhat = [hat1, hat2, hat3, hat4, hat5, hat6, hat7, hat8, hat9, hat10, hat11, hat12]



/*Define a function displayHat(hat) that will accept a Hat object and create
an HTML component using that object. The HTML component needs to
 exactly match the structure of an individual static HTML hat component.
  Use the function to render all of the hat objects
on the products.html page instead of the static HTML and The
additional CSS class will be the value of the color property of the
hat object used to render that component.*/

function loadsocks() {
  xhr = new XMLHttpRequest()
  xhr.open("GET", "socks.json")
  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let allaccessory = document.getElementsByClassName('accessory')
      let reponse = xhr.responseText
      let donnejavascript = JSON.parse(reponse)
      for (i = 0; i < donnejavascript.length; i++) {
        displayAccessory(donnejavascript[i])
      }
    }
  })
  xhr.send(null)
}

loadsocks()

function loadsunglasses() {
  xhr2 = new XMLHttpRequest()
  xhr2.open("GET", "sunglasses.json")
  xhr2.addEventListener('readystatechange', function() {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
      let allaccessory = document.getElementsByClassName('accessory')
      let reponse2 = xhr2.responseText
      let donnejavascript2 = JSON.parse(reponse2)
      for (i = 0; i < donnejavascript2.length; i++) {
        displayAccessory(donnejavascript2[i])
      }
    }
  })
  xhr2.send(null)
}

loadsunglasses()

function loadgloves() {
  xhr4 = new XMLHttpRequest()
  xhr4.open("GET", "gloves.json")
  xhr4.addEventListener('readystatechange', function() {
    if (xhr4.readyState === 4 && xhr4.status === 200) {
      let reponse4 = xhr4.responseText
      let donnejavascript4 = JSON.parse(reponse4)
      for (i = 0; i < donnejavascript4.length; i++) {
        displayAccessory(donnejavascript4[i])
      }
    }
  })
  xhr4.send(null)
}

loadgloves()

function displayAccessory(element) {
  let text = [
    document.createTextNode(element.price),
    document.createTextNode(element.name),
    document.createTextNode(element.color),
    document.createTextNode("Add to wishlist!"),
    document.createTextNode("Couleur:")
  ];
  let div1 = document.createElement('div')
  div1.className = "accessory col-sm-4"
  div1.className += " " + element.color
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
  button.className = "btn btn-outline-primary"
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

function usedisplayaccessoirhat() {
  let numberhat = tabhat.length
  for (i = 0; i < numberhat; i++) {
    displayAccessory(tabhat[i])
  }
}
usedisplayaccessoirhat()



/*write a function highlightSelectedFilter() that will remove the active
CSS class from all filter buttons, and then add the active CSS class to
 the filter button that was clicked. Bind this function to
 each of filter buttons on the products.html page and  */

function highlightSelectedFilter(target) {
  let elements = document.getElementsByClassName('active')
  if (elements) {
    for (i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active')
    }
    target.className += " active"
  }
}

(function() {
    buttons = document.querySelectorAll('button')
    for (i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function(e) {
        highlightSelectedFilter(e.currentTarget)
      })
    }
  }
)()



/* function filterHatsByColor().
Bind this function as a click event to each of the filter buttons. */

function filterHatsByColor(element) {
  let blocsaccsesory = document.querySelectorAll('.blue,.green,.red,.yellow')
  for (i = 0; i < blocsaccsesory.length; i++) {
    if (element === 'all') {
      blocsaccsesory[i].style.display = 'block'
    }
    else {
      blocsaccsesory[i].style.display = 'none'
    }
  }
  if (element !== 'all') {
    let afficheselect = document.querySelectorAll('.' + element)
    for (i = 0; i < afficheselect.length; i++) {
      afficheselect[i].style.display = 'block'
    }
  }
}

let parentfilterbutton = document.querySelector('.btn-group')
let filterbutton = parentfilterbutton.childNodes;
for (i = 0; i < filterbutton.length; i++) {
  filterbutton[i].addEventListener('click', function(e) {
    element = e.currentTarget.textContent
    filterHatsByColor(element)
  })
}



/*function loadRemoteAccessories(). The function will use the textContent
  of the button that it is bound to retrieve the objects for that category
   via AJAX. The AJAX request will get the JSON file for the category,
   which contains those types of accessories. It will then remove all of
   the currently loaded Accessory HTML components, create Accessory objects
   from each of the retrieved JSON objects, and render Accessory components
   for each of these accessory objects on the page. Bind the function so that
   when the "Socks" or "Sunglasses" links are clicked, the accessories for
   that category are displayed.
*/
function loadRemoteAccessories(target) {
  let parent = document.getElementById('products')
  parent.parentNode.removeChild(parent)
  let conteneur = document.querySelector('.container2')
  let parentsup = document.createElement('div')
  parentsup.id = 'products'
  parentsup.className = 'row'
  conteneur.appendChild(parentsup)
  if (target === "socks") {
    loadsocks()
  } else if (target === "sunglasses") {
    loadsunglasses()
  } else if (target === "hats") {
    usedisplayaccessoirhat()
  } else if (target === "gloves") {
    loadgloves()
  } else {
    loadsocks()
    loadsunglasses()
    usedisplayaccessoirhat()
    loadgloves()
  }

  (function() {
    setTimeout(liaisonbutton, 1000)
  })()
}

let filterelem = document.getElementsByClassName("nav-link btn btn-outline-secondary mr-3")
for (i = 0; i < filterelem.length; i++) {
  filterelem[i].addEventListener('click', function(e) {
    loadRemoteAccessories(e.currentTarget.textContent)
  })
}




/*Write  function addToWishlist(accessory) that takes an accessory object as a
parameter function so that up to three accessories can be added to the wishlist. */

function addToWishlist(accessory) {
  let tableauaccessory = accessory.parentElement.childNodes
  nameaccessory = tableauaccessory[0].textContent
  let couleuraccessory = tableauaccessory[1].lastChild.textContent
  tableauaccessory2 = accessory.parentElement.parentElement.childNodes
  let linkaccessory = tableauaccessory2[1].src
  let prixaccessory = tableauaccessory2[0].textContent
  let choiceaccessory = new createAccessory(nameaccessory, prixaccessory, couleuraccessory, linkaccessory)
  let jsonchoiceaccessory = JSON.stringify(choiceaccessory)
  if (sessionStorage.getItem("accessory1") == null) {
    sessionStorage.setItem("accessory1", jsonchoiceaccessory)
  } else if (sessionStorage.getItem("accessory2") == null) {
    sessionStorage.setItem("accessory2", jsonchoiceaccessory)
  } else if (sessionStorage.getItem("accessory3") == null) {
    sessionStorage.setItem("accessory3", jsonchoiceaccessory)
  } else {
    alert('il ya déja 3 enregistrement')
  }

}

function liaisonbutton() {

  let bt = document.getElementsByClassName('btn-outline-primary')
  for (i = 0; i < bt.length; i++) {
    bt[i].addEventListener('click', function(e) {
      addToWishlist(e.currentTarget)
    })
  }
}

chargement = setTimeout(liaisonbutton, 1000)
