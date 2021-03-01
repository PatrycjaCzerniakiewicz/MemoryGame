let items = document.getElementsByClassName("item")
let pairsCounter = document.getElementById("pairs")
let timer = document.getElementById('timer')
let itemClick = document.getElementById("itemClick")
const newGame = document.getElementById("newGame")
const check = document.getElementById("check")
const end = document.getElementById("end")
const yes = document.getElementById("yes")
const no = document.getElementById("no")
const win = document.getElementById("win")
const gameContainer = document.querySelector('.gameContainer');
const tryAgainEnd = document.getElementById('tryAgainEnd')
const tryAgainWin = document.getElementById('tryAgainWin')
let firstItem, secondItem

items = [...items]
let openedCards = 0;
let pairs = 0;
let click = 0;
let pairsToWin = 6;


const resetGame = () => {
    openedCards = 0;
    pairs = 0;
    click = 0;
}

// timer
let counter = 100

const countTime = () => {
    counter--
    timer.innerText = counter
    if (counter === 0) {
        clearInterval(setTimer);
        gameOver();
    }
}

let setTimer = setInterval(countTime, 1000);


const gameOver = () => {
    end.classList.toggle("restart")
    tryAgainEnd.addEventListener("click", () => {
        location.reload()
        randomItems()
    })
}


const startNewGame = () => {
    resetGame();
    setTimer;
    items.forEach((item) => {
        let randomPos = Math.floor(Math.random() * 12);
        item.style.order = randomPos;
        setTimeout(() => {
            item.classList.remove('is-flipped');
        }, 1000);
    })
}
startNewGame();


// rotacja 3D
function rotate(event) {
    if (this === firstItem) return
    this.classList.toggle("is-flipped");
    openedCards++;


    if (openedCards === 1) {
        firstItem = event.currentTarget;
    }

    if (openedCards === 2) {
        blockFlipping();
        checkIfPair(event.currentTarget);
        countClicks();
    }
}

items.forEach((item) => {
    item.addEventListener("click", rotate)
})

const countClicks = () => {
    click++
    itemClick.innerHTML = click;
}


const checkIfPair = (item) => {
    const firstColor = firstItem.dataset.color;
    const secondColor = item.dataset.color;


    if (firstColor === secondColor) {
        pairs++;
        item.classList.add('paired');
        firstItem.classList.add('paired');
        gameContainer.classList.remove('block-clicking');
        openedCards = 0;
        pairsCounter.innerHTML = pairs;

        if (pairs === pairsToWin) {
            winner();
        }
    } else {
        setTimeout(() => {
            item.classList.remove('is-flipped');
            firstItem.classList.remove('is-flipped');
            gameContainer.classList.remove('block-clicking')
            openedCards = 0;
        }, 2000);
    }
}

const blockFlipping = () => {
    gameContainer.classList.add('block-clicking')
}

const winner = () => {
    resetGame();
    gameWinner();
    startNewGame();
}

const gameWinner = () => {
    win.classList.toggle("restart")
    clearInterval(setTimer)
    tryAgainWin.addEventListener("click", () => {
        location.reload()
        randomItems()
    })
}


// nowa gra
newGame.addEventListener("click", () => {
    clearInterval(setTimer);
    check.classList.toggle("restart")
})

yes.addEventListener("click", () => {
    location.reload()
    randomItems()
})

no.addEventListener("click", () => {
    setTimer = setInterval(countTime, 1000);
    check.classList.remove("restart");
})


