let container = document.getElementById('container')
let scoreElement = document.getElementById('score')

let score = 0

console.log(container)
console.log(scoreElement)
console.log(score)


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function showBubble() {
    container.innerHTML += `
        <img
            onclick="handleClick(this)"
            class="bubble"
            src="https://www.freeiconspng.com/uploads/water-bubble-png-2.png"
            style="
                left: ${randomInteger(0, 100)}%;
                top: ${randomInteger (0, 100)}%;
            "
        >
    `
}

for(let i = 0; i < 150; i++) {
   showBubble()
}



 function handleClick(bubble) {
    score++
    scoreElement.innerHTML = score
    bubble.remove()
 }
 
 function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function showBub() {
    con.innerHTML += `
        <img
            onclick="handleClick(this)"
            class="bub"
            src="https://www.freeiconspng.com/uploads/water-bubble-png-2.png"
            style="
                left: ${randomInteger(0, 100)}%;
                top: ${randomInteger (0, 100)}%;
            "
        >
    `
}

for(let i = 0; i < 150; i++) {
   showBub()
}



 function handleClick(bub) {
    score++
    scoreElement.innerHTML = score
    bub.remove()
 }