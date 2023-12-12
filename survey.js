
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What do you think of Node.js?",
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  // Add more questions as needed
];

const processAnswer = (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
};

const askQuestion = (index) => {
  rl.question(questions[index], (answer) => {
    processAnswer(answer);

    if (index < questions.length - 1) {
      // Ask the next question
      askQuestion(index + 1);
    } else {
      // All questions asked, close the interface
      rl.close();
    }
  });
};

// Start asking questions
askQuestion(0);