const nameList = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Ian",
  "Julia",
  "Kevin",
  "Laura",
  "Michael",
  "Nina",
  "Oliver",
  "Paula",
  "Quentin",
  "Rachel",
  "Sam",
  "Tina",
  "Uma",
  "Victor",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage() {
  const messages = [
    "Hello there!",
    "Greetings, traveler!",
    "Welcome to the world of JavaScript!",
    "Have a fantastic day!",
    "May your code be bug-free!",
    "Keep calm and code on.",
    "The future is bright with JavaScript!",
    "Enjoy your coding journey!",
    "Happy coding!",
    "Stay curious and keep learning!",
    "Code is poetry.",
    "Debugging is like being a detective in a crime movie.",
    "Talk is cheap. Show me the code.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different.",
    "JavaScript is the duct tape of the internet.",
    "Simplicity is the soul of efficiency.",
    "Before software can be reusable it first has to be usable.",
    "Make it work, make it right, make it fast.",
  ];

  // Generate a random index within the bounds of the messages array
  const randomIndex = Math.floor(Math.random() * messages.length);

  // Return the message at the random index
  return messages[randomIndex];
}
