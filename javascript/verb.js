// verb.js

// Define an array of verb choices
const verbs = ["jumps", "runs", "flies", "swims", "dances"];

// Function to get a random verb
function getRandomVerb() {
    const randomIndex = Math.floor(Math.random() * verbs.length);
    return verbs[randomIndex];
}

// Export the function to be used in other files
export { getRandomVerb };
