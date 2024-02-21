// subject.js

// Define an array of subject choices
const subjects = ["THe turkey", "Mom", "Dad ","My Teacher","The Elephant","The cat"];

// Function to get a random subject
function getRandomSubject() {
    const randomIndex = Math.floor(Math.random() * subjects.length);
    return subjects[randomIndex];
}

// Export the function to be used in other files
export { getRandomSubject };