const dotsClasses = [
    'v-center h-center',
    'v-right h-top',
    'v-left h-bottom',
    'v-left h-top',
    'v-right h-bottom',
    'v-left h-center',
    'v-right h-center'
]

const dice = document.querySelector('.dice')

const result = document.querySelector('#result')

let isFirst = true;

// function to generate a random dice face
function rollDice() {
    const randomNum = Math.floor(Math.random() * 6) + 1

    if (!isFirst) {
        result.innerText = randomNum;
        result.style.opacity = '1';
        result.style.fontSize = '60px';
        result.style.padding = '15px 50px';
        setTimeout(() => {
            result.style.opacity = '0';
            result.style.fontSize = '0px';
            result.style.padding = '0';
        }, 1300)
    } else {
        isFirst = false
    }

    createDotDivs(randomNum)

}

// function to create divs of dots knowing its number
function createDotDivs(numberOfDots) {
    dice.innerHTML = '' // clear the previous dots

    // create number of divs equal the randomNumber
    for (let i = 0; i < numberOfDots; i++) {

        const dot = document.createElement('div') // creating a div for the dot

        // if div number is even skip the center-center dot and add its classes using dotsClasses
        let classIndex = (numberOfDots % 2 === 0) ? i + 1 : i;
        dot.className = `dot ${dotsClasses[classIndex]}`

        dice.appendChild(dot) // append dot to the dice
    }
}



window.addEventListener('load', rollDice)