let textToSpeak = "";

const nouns = ["The turkey", "mom", "Dad", "The dog", "My teacher", "The elephant", "The car"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns1 = ["goat", "monkey", "fish", "frog", "bug", "worm"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

let nounsArray = [];
let verbsArray = [];
let adjectivesArray = [];
let nouns1Array = [];
let placesArray = [];

// Function to get a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Update the displayed story
function updateStoryOutput() {
    document.getElementById('storyOutput').innerText = textToSpeak;
}

// Construct the sentence in the desired order
function updateSentence() {
    textToSpeak = `${nounsArray.join(' ')} ${verbsArray.join(' ')} ${adjectivesArray.join(' ')} ${nouns1Array.join(' ')} ${placesArray.join(' ')}`.trim();
    updateStoryOutput();
}

// Button functionalities
document.getElementById('nounButton').onclick = function() {
    nounsArray.push(getRandomItem(nouns));
    updateSentence();
};

document.getElementById('verbButton').onclick = function() {
    verbsArray.push(getRandomItem(verbs));
    updateSentence();
};

document.getElementById('adjectiveButton').onclick = function() {
    adjectivesArray.push(getRandomItem(adjectives));
    updateSentence();
};

document.getElementById('noun1Button').onclick = function() {
    nouns1Array.push(getRandomItem(nouns1));
    updateSentence();
};

document.getElementById('placeButton').onclick = function() {
    placesArray.push(getRandomItem(places));
    updateSentence();
};

document.getElementById('speakButton').onclick = function() {
    speakNow();
};

document.getElementById('resetButton').onclick = function() {
    textToSpeak = "";
    nounsArray = [];
    verbsArray = [];
    adjectivesArray = [];
    nouns1Array = [];
    placesArray = [];
    updateStoryOutput();
};

function speakNow() {
    if (textToSpeak.trim() === "") {
        alert("Please create a story before speaking!");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Google US English') || null;
    utterance.pitch = 1;
    utterance.rate = 1;

    window.speechSynthesis.speak(utterance);
}

// Initial update to clear the output
updateStoryOutput();
