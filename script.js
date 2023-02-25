let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

  const title = document.getElementById("main-title")

  console.log(title);

  title.innerText = ("Dom's Garage")

  // Part 2

  const body = document.querySelector("body")

  console.log(body);

  body.style.backgroundColor = "turquoise" 

  // Part 3

  const favoriteThings = document.getElementById("favorite-things")

  favoriteThings.removeChild(favoriteThings.lastElementChild)
  
  console.log(favoriteThings.lastElementChild)
  
  // Part 4

  const specialTitle = document.getElementsByClassName("special-title")

  console.dir(specialTitle)

  for (i = 0; i <= 7; i++) {
    specialTitle.style.font-size = "2rem"
  }

  // Part 5

  const pastRaces = document.getElementById("past-races")

  pastRaces.removeChild(pastRaces.lastElementChild.previousElementSibling.previousElementSibling)
  console.log(pastRaces);

  // Part 6

  const newLi = document.createElement("li")
  newLi.textContent = "Lagos"

  console.log(newLi);

  pastRaces.appendChild(newLi)
  console.log(pastRaces);

  // Part 7

  const newDiv = document.createElement("div")
  newDiv.classList.add(".blog-post")

  console.log(newDiv);

  const newH1 = document.createElement("h1")
  newH1.textContent = "Lagos"

  console.log(newH1);

  const newP = document.createElement("p")
  newP.textContent = "I hydroplaned all the way Lagos Lagoon"

  console.log(newP);

  newH1.appendChild(newP)
  newDiv.appendChild(newH1)

  const mainDiv = document.getElementsByClassName("main")
  console.log(mainDiv);

  body.appendChild(newDiv)

  // Part 8


  // Part 9




});
