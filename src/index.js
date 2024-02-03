// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector("header")
const logoTitle = document.querySelector("#logoTitle")
const logoImage = logoTitle.previousElementSibling
const firstCard = document.querySelector(".card")
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img")
const titleFirstCard = firstCard.querySelector(".card-body .card-title")
const subtitleFirstCard = firstCard.querySelector(".card-body .card-subtitle")
const textFirstCard = firstCard.querySelector(".card-body .card-text")
console.log(textFirstCard);
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling
const link2FirstCard = link1FirstCard.nextElementSibling


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
let allAnchorTags = document.querySelectorAll("nav a")
// B- Loop over the links and console.log their text content
allAnchorTags.forEach(anchor => console.log(anchor.textContent));
// C- Turn the collection of links into a real array
let realArray = [...allAnchorTags]
// console.log(allAnchorTags);
// console.log(realArray);
// D- Use .filter to find the anchor tag with the textContent of "Home"
let homeAnchor = realArray.find( anchor => anchor.textContent === "Home")
// console.log(homeAnchor);

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "BloomTech Dog"
titleFirstCard.textContent = "I is DOGGG!!!"
subtitleFirstCard.textContent = "A story in three parts"
textFirstCard.textContent = "Dog are good, dogs are nice, stay away from cats"
link2FirstCard.textContent = "Dog ipsum"
imageFirstCard.setAttribute("src", "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
logoTitle.className = "logo heading bannana"
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link1FirstCard.setAttribute("href", "https://pexels.com/search/dog")
link2FirstCard.setAttribute("href", "https://dogipsum.com/")
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add("sky")
header.classList.remove("sky")
//  B- By manipulating inline styles on the element
header.style.fontSize = "2em"
// setInterval(() => header.classList.toggle("sky"),1000)
// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
let blogLink = document.createElement("a")
blogLink.href = "#"
blogLink.textContent = "Blog"
let mainNav = document.querySelector("#mainNav")
mainNav.appendChild(blogLink)


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
let secondCard = firstCard.cloneNode(true)
document.querySelector(".card-group").appendChild(secondCard)

const data = {
    "contact" : {
        "contact-heading" : "Contact",
        "adress" : "123 way 456 street bla bla",
        "phone" : "1 (888) 888-8888",
        "email" : "sales@greatidea.io"
    }
}

const contactHeading = document.querySelector(".contact-heading")
const adress = document.querySelector(".address")
const phone = document.querySelector(".phone")
const email = document.querySelector(".email")

contactHeading.textContent = data["contact"]["contact-heading"]
adress.textContent = data["contact"]["adress"]
phone.textContent = data["contact"]["phone"]
email.textContent = data["contact"]["email"]

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
