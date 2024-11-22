import { questions, characters, alerts, htmlData } from './data.js';
import { infiniteCharacters } from './animations.js';

//---------------------- GLOBAL VARIABLES -----------------------------//

// DIVs
const leftContainer = document.getElementById('left-container');
const rightContainer = document.getElementById('right-container');
const matchingContent = document.getElementById('animation-content');
const questionContent = document.getElementById('question-content');
const startContent = document.getElementById('start-content');
const modalText = document.getElementById('modal-text');
const modal = document.getElementById('whole-modal');
const resetBtn = document.getElementById('reset');

// BUTTONS
const startBtn = document.getElementById('start-btn');
const closeModal = document.getElementById('close-modal');

// LOGIC
let questionPosition = 0;
let userSentimentArray = [];
let userSentiment = '';
let userChosenCharacter = '';
let isCharacterChosen = false;

//--------------------------- INIT -----------------------------//

(() => {
    let playedBefore = localStorage.getItem('characters')
    console.log(playedBefore)
    if (playedBefore){
        // render, 'You've matched with..., want to choose a new character?
        console.log('localStorage')
    }
    startContent.style.display = 'flex';
    //call infinitecharacters
    // infiniteCharacters(rightContainer, characters)

})();

//-------------------------- EVENTS ------------------------------//

// INIT APP
startBtn.addEventListener('click', () => {
    if (!userChosenCharacter){
        startContent.style.display = 'none';
        questionContent.style.display = 'flex';
        render(leftContainer, question);
        questionPosition++;
    };
});

// CLOSE MODAL
closeModal.addEventListener('click', () => {modal.style.display = 'none'});

// SET USER INPUT
document.addEventListener('input', (e) => {
    userSentiment = e.target.id;
});

// LISTEN FOR: next question else renderAlert(); on reset click, removeLocalEntries() 
document.addEventListener('click', (e) => {
    if (e.target.dataset.next) {
        if (!isCharacterChosen && userSentiment) {
            getNextState()
            userSentiment = '';
        } else {
            modal.style.display = 'flex';
            renderAlert(alerts.notChosen);
        }
    } else if (e.target.dataset.resetPrompt) {
        modal.style.display = 'flex';
        resetBtn.style.display = 'flex';
        renderAlert(alerts.reset);
    } else if (e.target.dataset.reset) {
        removeLocalEntries();
        window.location.reload();
    } 
})

// HIGHLIGHT RADIO ON CHANGE
document.addEventListener('change', highlightCheckedOption)


//------------------------ FUNCTIONS --------------------------------//

// RENDERERS
function renderAlert(x){
    modalText.parentElement.style.display = 'flex';
    modalText.textContent = x;
};

function render(location, contentFunction) {
    const content = contentFunction();
    location.innerHTML = content;
};

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

// RE-INIT
function removeLocalEntries() {
    localStorage.clear();
    removeCharacterFrequency();
    userSentimentArray = [];
    questionPosition = 0;
}

function removeCharacterFrequency() {
    for (let character of characters) {
        character.frequency = 0;
    }
}

// SEQUENTIAL APP LOGIC
function getNextState() {
    userSentimentArray.push(userSentiment);
    checkCharacter();
    if (questionPosition<questions.length && userSentiment) {
        render(leftContainer, question);
        questionPosition++;

    } else if (isCharacterChosen) { // else if character has been chosen
        leftContainer.innerHTML = htmlData.questionWaiting
        questionContent.style.display = 'none';
        matchingContent.style.display = 'flex'
        setTimeout(()=>{
            render(rightContainer, character);
            render(leftContainer, question);
            localStorage.setItem('character', JSON.stringify(userChosenCharacter));
        }, '5000')

    } 
};

// QUESTION LOGIC
function question() {
    if (!isCharacterChosen) {
        return getQuestion();
    } else {
        const defaultState = `
            <h2>You've got a Match</h2>
            <h3>If you want to find a new character match. Press the button below.</h3>
            <button data-reset-prompt="reset-prompt">NEW CHARACTER MATCH</button>`;
        return defaultState;
    }
} // logic to push to character

function getQuestion() {
    startBtn.style.display = 'none';
    let renderQuestion = '';
    let currentQuestion = questions[questionPosition];
    renderQuestion = `<h2 class="fade-in">${currentQuestion.question}</h2>
    <div class="radio-options fade-in" id="radio-options">`
    for (let option of currentQuestion.options) {
        renderQuestion += `
            <div class="radio">
                <label for="${option}">${option}</label>
                <input
                type="radio"
                id="${option}"
                value="${option}"
                name="options"
                >
            </div>
           
        `
    };
    renderQuestion += ' </div><button id="next-btn" data-next="next">NEXT QUESTION</button>';
    return renderQuestion;
}; // returns question HTML

function checkCharacter() {
    if (userSentimentArray.length === questions.length) {
        isCharacterChosen = true;
    } else {
        isCharacterChosen = false;
    }
}

// CHARACTER LOGIC
function character() {
    if (isCharacterChosen) {
        console.log(userSentimentArray)
        calculateCharacterFrequency();
        userChosenCharacter = getCharacterName()
        return getCharacter();
    } else {
        const defaultState = 'default state';
        return defaultState 
    }
}; // init from getNextState()

function getCharacter() {
    let characterBlock = '';
    const characterName = characters.filter(function(character){
        return character.name === userChosenCharacter;
    })[0];
    characterBlock = `<div class="dotted-container fade-in">
    <div class="character-content"> 
        <h2>${characterName.name}</h2>
        <p>${characterName.statement}</p>
    </div>
    <img src="${characterName.image}"/>


    </div>
`
    return characterBlock;
} // returns character HTML

function getCharacterName() {
    let frequency = 1;
    let characterNameArray = [];
    for (let character of characters) {
        if (character.frequency = frequency){
            characterNameArray.push(character.name)
        } else if (character.frequency > frequency) {
            characterNameArray = [];
            characterNameArray.push(character.name)
            frequency = character.frequency;
        }
    }
    if (characterNameArray.length > 1) {
        // STRAIGHT HERE
        let randomNumber = Math.floor(Math.random()*characterNameArray.length);
        return characterNameArray[randomNumber]
    } else {
        return characterNameArray[0]
    }
}; // returns str


// NOT WORKING PROPERLY
function calculateCharacterFrequency() {
        for (let character of characters){
            for (let sentiment of character.sentiments) {
                for (let i=0;i<userSentimentArray.length;i++) {
                    if (userSentimentArray[i] === sentiment){
                        console.log(sentiment)
                        console.log(userSentimentArray[i] === sentiment)
                        console.log(userSentimentArray[i])
                        character.frequency++;
                    }
                }
            }
        }
    console.log(characters)
}; // updates character from data.js












