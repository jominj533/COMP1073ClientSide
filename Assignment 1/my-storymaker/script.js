// script.js

// Define arrays for subject, verb, and object choices
const subjects = ["THe turkey", "Mom", "Dad ","My Teacher","The Elephant","The cat"];
const verbs = ["jumps","Sat on","danced with","runs", "flies"];
const objects = ["over the moon", "through the forest", "across the sky","On the chair","In my soup"];

// Initialize variables to store user selections
let selectedSubject = "";
let selectedVerb = "";
let selectedObject = "";

// Event listeners for each button
document.getElementById("SubjectButton").addEventListener("click", chooseSubject);
document.getElementById("VerbButton").addEventListener("click", chooseVerb);
document.getElementById("ObjectButton").addEventListener("click", chooseObject);
document.getElementById("ViewStoryButton").addEventListener("click", viewcompletedButton);

// Functions to handle user choices
function chooseSubject() {
    selectedSubject = getRandomChoice(subjects);
    updateButton("SubjectButton", selectedSubject);
}

function chooseVerb() {
    selectedVerb = getRandomChoice(verbs);
    updateButton("VerbButton", selectedVerb);
}

function chooseObject() {
    selectedObject = getRandomChoice(objects);
    updateButton("ObjectButton", selectedObject);
}

function viewcompletedButton() {
    const completedButton = `${selectedSubject} ${selectedVerb} ${selectedObject}.`;
    document.getElementById("completedButton").textContent = completedButton;
}

// Helper function to get a random choice from an array
function getRandomChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Helper function to update button text
function updateButton(buttonId, newText) {
    document.getElementById(buttonId).textContent = newText;
}
