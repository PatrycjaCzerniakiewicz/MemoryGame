let items = document.getElementsByClassName("item")
let pairsCounter = document.getElementById("pairs")
let timer = document.getElementById('timer')
let itemClick = document.getElementById("itemClick")
const newGame = document.getElementById("newGame")
const check = document.getElementById("check")
const yes = document.getElementById("yes")
const no = document.getElementById("no")
const startGame = document.getElementById("startGame")
let firstItem, secondItem



items = [...items]


// ukryj elementy po 2 s
// setTimeout(() => {
//     items.forEach( item => {
//         item.addEventListener("click", () => {

//     })
// }, 2000);


// rotacja 3D
function rotate() {
    this.classList.toggle("is-flipped")

}

items.forEach((item) => {
    item.addEventListener("click", rotate)

})

// timer
let counter = 100

setInterval(() => {
    counter --
    timer.innerText = counter
    // (counter === 0) ? console.log("game over") : null
}, 1000);




// ilość kliknięć
click = 0;

items.forEach((item) => {
    item.addEventListener("click", function() {
        click += 1
        itemClick.innerHTML = click
    })
})

const secondClick = () => {
    if(parseInt(click) % 2 === 0) {
        items.forEach((item => {
            item.removeEventListener("click", rotate)
        }))} else {
        rotate()
    }
}

// nowa gra
newGame.addEventListener("click", () => {
    check.classList.toggle("restart")
})

yes.addEventListener("click", () => {
    location.reload()
    randomItems()
})

no.addEventListener("click", () => {
    check.classList.remove("restart")
})

// start przy przeładowaniu strony && ilosc par===6
startGame.addEventListener("click", () => {
    this.classList.toggle("clickToStart")
})

// randomowe ułożenie kart
function randomItems () {
    items.forEach( item => {
        item = items[Math.floor(Math.random() * items.length)];
    })
}

// czy para

// ilość par
