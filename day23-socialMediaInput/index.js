/*

DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

TODO
3. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

*/

const accountName = document.querySelector(".account-name");
const mainContainer = document.querySelector("main");
let tweetBoxes;
let userName;


accountName.addEventListener("keydown", accountNameSubmitting)

function accountNameSubmitting(event) {
    if (event.key === "Enter") {
        if (!event.shiftKey) {
            saveUserName()
            substituteTextarea(accountName)
            insertCommandSection(true)
            // const test = document.querySelector('command-box')
            // test.value = 'HI'


            accountName.removeEventListener('keydown', accountNameSubmitting)
        }
        event.preventDefault();
    }
}

function saveUserName() {
    userName = accountName.value;
    console.log(userName);
}

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

function substituteTextarea(element) {
    console.log(element);
    const newElement = document.createElement('p')
    newElement.innerText = element.value
    newElement.className = element.className
    element.parentElement.appendChild(newElement)
    element.remove()
}

function insertCommandSection(isFirstTime) {
    console.log('hi');
    const newCommandSection = document.createElement('section')
    newCommandSection.classList.add('command-section')
    newCommandSection.innerHTML = `
    <div class="cli-regular-text">
    <div class='new-command'>
        <p class="cli-new-command">>_ C:\\Users\\${userName}></p>
        <textarea class="command-box" autofocus oninput="auto_grow(this)">${isFirstTime?'new.tweet':''}</textarea>
        </div>
    </div>
    `
    mainContainer.appendChild(newCommandSection)

    const commandBox = document.querySelector('textarea.command-box')
    commandBox.focus()

    commandBox.addEventListener("keydown", commandBoxSubmitting)


    if (isFirstTime) {
        checkCommand()
    }
}


function commandBoxSubmitting(event) {
    if (event.key === "Enter") {
        if (!event.shiftKey) {
            checkCommand()
            accountName.removeEventListener('keydown', accountNameSubmitting)
        }
        event.preventDefault();
    }
}

const checkCommand = () => {
    // function to check command error
    const commandBox = document.querySelector('textarea.command-box')
    const command = commandBox.value
    if (command === 'new.tweet') {
        applyNewTweetCommand()
    } else {
        const containingSections = document.querySelectorAll('.command-section')
        console.log(containingSections);
        // containingSections[containingSections.length - 1].appendChild(newTweetInstructions)

        const commandResponse = document.createElement('div')
        commandResponse.classList.add('command-response')
        commandResponse.innerHTML = `
        <p class="cli-error">Twitter Simple CLI: ${command.split(' ')[0]} command not found. Try new.tweet</p>
        `
        substituteTextarea(commandBox)
        containingSections[containingSections.length - 1].appendChild(commandResponse)
        insertCommandSection(false)
    }

}

function applyNewTweetCommand() {

    substituteTextarea(document.querySelector('textarea.command-box'))

    const newTweetInstructions = document.createElement('p')
    newTweetInstructions.classList.add('cli-new-tweet')
    newTweetInstructions.innerHTML = `
    Write your tweet. (press <span
        class="text-color-yellow">Enter</span> to share and <span
        class="text-color-yellow">Shift+Enter</span> for a new line)
    `

    const containingSections = document.querySelectorAll('.cli-regular-text')
    console.log(containingSections);
    containingSections[containingSections.length - 1].appendChild(newTweetInstructions)


    // response div
    const commandResponse = document.createElement('div')
    commandResponse.classList.add('command-response')
    commandResponse.innerHTML = `
    <div class="input-line">
        <p class="dollar-sign">$</p>
        <textarea class='tweet-box' oninput="auto_grow(this)"></textarea>
    </div>
    `

    containingSections[containingSections.length - 1].parentElement.appendChild(commandResponse)

    const tweetBox = document.querySelector('textarea.tweet-box')
    removeEnterForTextBox(tweetBox)
    tweetBox.focus()
}

let charsLimit = false
let isEditing = false

const checkCounter = (textArea) => {
    const charsNumberArray = document.querySelectorAll('.tweet-chars .chars-number')
    const charsNumberSpan = charsNumberArray[charsNumberArray.length - 1]

    const tweetCharsArray = document.querySelectorAll('.tweet-chars')
    const tweetCharsParagraph = tweetCharsArray[tweetCharsArray.length - 1]
    console.log(tweetCharsParagraph);



    if (charsNumberSpan && isEditing) {
        // console.log(charsNumberSpan);
        // console.log(textArea.value);
        // console.log(textArea.textLength);

        const availableCharsCounter = 140 - textArea.value.length

        charsNumberSpan.innerText = availableCharsCounter

        const notice = document.createElement('span')


        if (availableCharsCounter < 0 && !charsLimit) {
            tweetCharsParagraph.classList.add('chars-limit-error')
            charsNumberSpan.classList.add('chars-limit-error')
            notice.id = 'notice'
            notice.innerText = " | YOU CAN'T SEND YOUR TWEET UNTIL YOU REMOVE SOME CHARACTERS"
            tweetCharsParagraph.appendChild(notice)
            charsLimit = true
        } else if (availableCharsCounter <= 20 && availableCharsCounter >= 0) {
            tweetCharsParagraph.classList.add('chars-limit-error')
            charsNumberSpan.classList.add('chars-limit-error')

            const notice = document.querySelector('#notice')
            notice.remove()
            charsLimit = false

        } else if (availableCharsCounter > 0) {
            tweetCharsParagraph.classList.remove('chars-limit-error')
            charsNumberSpan.classList.remove('chars-limit-error')
            charsLimit = false
            const notice = document.querySelector('#notice')
            notice.remove()
        }



    } else {
        const tweetData = document.createElement('div')
        tweetData.classList.add('tweet-data')
        tweetData.innerHTML = `<p class="tweet-chars">---------- <span class="chars-number"></span>/140 characters</p>`

        const commandResponse = document.querySelectorAll('.command-response')
        // console.log(commandResponse);
        commandResponse[commandResponse.length - 1].appendChild(tweetData)
        isEditing = true
        checkCounter(textArea)
    }
}




function sendTweet(tweet) {
    isEditing = false
    console.log('tweet Sent');
    window.open('https://twitter.com/intent/tweet?text=' + tweet, '_blank')

    const tweetStatus = document.createElement('p')
    tweetStatus.classList.add('tweet-status')
    tweetStatus.innerText = '---------- Tweet Sent'

    const tweetDataArray = document.querySelectorAll('.tweet-data')
    const tweetDataElement = tweetDataArray[tweetDataArray.length - 1]
    tweetDataElement.appendChild(tweetStatus)
}



const removeEnterForTextBox = (textArea) => {
    textArea.addEventListener('keydown', function (event) {

        console.log(event.key);

        if (event.key === "Enter" && !event.shiftKey) {
            // Don't generate a new line
            event.preventDefault();
            if (textArea.value !== '') {

                console.log(140 - textArea.value.length);
                if ((140 - textArea.value.length) >= 0) {
                    substituteTextarea(textArea)
                    sendTweet(textArea.value)
                    insertCommandSection(false)
                }


            }

        }
    });

    textArea.addEventListener('keyup', function (event) {
        if (event.key !== "Enter") {
            checkCounter(textArea)
            if (textArea.value.length < 0) {

            } else {

            }
        }
    });

}


// 