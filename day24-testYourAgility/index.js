//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed() {
    pushed = true;
}

//set the target Int
function setTargetInt() {
    var targetElem = document.getElementById('targetNum');
    targetInt = Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
    const wheelLimit = targetInt + 20 // limit at which the wheel will start over
    for (let i = 0; i <= wheelLimit; i++) {

        spinningElem.innerText = i // show the number to the user;

        await sleep(100) //Paste this wherever you need to sleep the incrementor 

        if (pushed) {
            //Trigger this function when the STOP button has been pushed and stop the loop
            stop(i);
            break
        }

        if (i === wheelLimit) {
            // repeat the loop if the user missed the number
            i = 0
        }
    }
}

//EDIT THIS FUNCTION
function stop(i) {
    //WRITE YOUR CODE HERE
    var result = document.getElementById('result'); //display your result message here

    const userSelection = parseInt(spinningElem.innerText) // get the number user stopped at

    // tell the user whether was the number right or wrong
    if (userSelection === targetInt) {
        result.innerText = 'WOW YOU ARE GREAT!'
    } else {
        result.style.color = 'red'
        result.innerText = `Oh no, you lose! Off by ${Math.abs(userSelection-targetInt)}`
    }
}


//main
setTargetInt();
spin()