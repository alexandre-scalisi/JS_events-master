// Fonctionnalité 1 :

// let footer = document.querySelector('footer');
// footer.addEventListener("click", () => console.log("click"))

// Fonctionnalité 1-Bis

let footer = document.querySelector('footer');
let counter = 0;
footer.addEventListener("click", () => {
  counter++;
  console.log("click " + counter)
})


// Fonctionnalité 2 :
let navbarToggler = document.getElementsByClassName("navbar-toggler")[0]
let navbarHeader = document.getElementById("navbarHeader")

let toggleCollapse = () => {
  if (navbarHeader.classList.contains("collapse")) {
    navbarHeader.classList.remove("collapse")
  } else {
    navbarHeader.classList.add("collapse")
  }
}

navbarToggler.addEventListener("click",toggleCollapse)


// Fonctionnalité 3 :
let cardText1 = document.getElementsByClassName("card-text")[0]
let cardEdit1 = document.getElementsByClassName("btn-outline-secondary")[0]

cardEdit1.addEventListener("click",() => cardText1.style.color = "red")


// Fonctionnalité 4 :
let cardText3 = document.getElementsByClassName("card-text")[1]
let cardEdit3 = document.getElementsByClassName("btn-outline-secondary")[1]
let clicked = false;
let baseColor = cardText3.style.color
let toggleCardTextColor = () => {
  cardText3.style.color = clicked ? baseColor : "green" 
  clicked = !clicked

}

cardEdit3.addEventListener("click", toggleCardTextColor)



// Fonctionnalité 5 :

let boostrap = document.querySelector("link");
let baseHref = boostrap.href;
let header = document.querySelector("header")
let navClicked = false;
let toggleBootstrap = () => {
  boostrap.href = navClicked ? baseHref : ""
  navClicked = !navClicked 
}

header.addEventListener("dblclick", toggleBootstrap)

// Fonctionnalité 6 :

let cardsViews = document.getElementsByClassName("btn-success")


let toggleSize = e => {
  let parent = e.target
  while (!parent.classList.contains("card")) {
    parent = parent.parentNode
  }

  let cardText = parent.getElementsByClassName("card-text")[0]
 
  let cardImg = parent.getElementsByClassName("card-img-top")[0]
  
  if (cardText.hidden) {
    cardText.hidden = false
  cardImg.style.width = "100%"
  cardImg.style.height = "100%"
  } else {
    cardText.hidden = true
  cardImg.style.width = "20%"
  cardImg.style.height = "20%"
  }

}

  for (let i = 0; i < cardsViews.length; i++) {
    cardsViews[i].addEventListener("mouseenter", e => toggleSize(e))
    
  }
  

//   Fonctionnalité 7 :

let cards = document.getElementsByClassName("col-md-4")
let containers = document.getElementsByClassName("container")
let greyButton = document.getElementsByClassName("btn-secondary")[0]

for (let i = 0; i < containers.length; i++) {
  if (containers[i].getElementsByClassName("col-md-4")[0] ) {
    containers[i].classList.add("d-flex")
  }
  
}

for (let i = 0; i < cards.length; i++) {
  cards[i].classList.add(`order-${i+1}`);
  
}

let tournerDroite = () => {

  for(let i = 0; i< cards.length; i++)
  {
    let num = parseInt(cards[i].className.slice(-1))
    cards[i].classList.remove("order-" + num)
    let newNum = num+1 > cards.length ? 1 : num+1
    cards[i].classList.add("order-" + newNum)
  }

}

greyButton.addEventListener("click", tournerDroite)



// Fonctionnalité 8 :

let blueBtn = document.getElementsByClassName("btn-primary")[0]

let tournerGauche = e => {
  e.preventDefault()
  for(let i = 0; i< cards.length; i++)
  {
    let num = parseInt(cards[i].className.slice(-1))
    cards[i].classList.remove("order-" + num)
    let newNum = num-1 == 0 ?  cards.length : num-1
    cards[i].classList.add("order-" + newNum)
  }

}

blueBtn.addEventListener("click", e=> tournerGauche(e))


// Fonctionnalité 9 :
let logo = document.getElementsByClassName("navbar-brand")[0]
logo.addEventListener("focus", e => e.currentTarget.style.border = "thin solid #ccc")
logo.addEventListener("blur", e => e.currentTarget.style.border = "none")
let root = document.documentElement
let mainDiv = document.createElement("div")
let containerDiv = document.createElement("div")
let rowDiv = document.createElement("div")
let colDiv = document.createElement("div")
containerDiv.className = "container-lg"

rowDiv.className = "row"
colDiv.className = "col-12"
rowDiv.appendChild(colDiv)
containerDiv.appendChild(rowDiv)
mainDiv.appendChild(containerDiv)
root.appendChild(mainDiv)
mainDiv.classList.add("mainDiv")


let body = document.querySelector("body")
colDiv.appendChild(header)
colDiv.appendChild(body)



let keyPressed = e => {
  
  switch (logo === document.activeElement && e.key) {
    
   
      
    case "a":
      rowDiv.className ="row"
      colDiv.className = "col-4"
      break;
    case "y":
      colDiv.className = "col-4"
      rowDiv.className ="row justify-content-center"
      break;
    case "p":
      colDiv.className = "col-4"
      rowDiv.className ="row justify-content-end"
      break;
      
    case "b":
      
        colDiv.className= "col-12"
        rowDiv.className= "row"
      break;

    default:
      break;
  }
}

document.addEventListener("keydown", (e) => keyPressed(e))



