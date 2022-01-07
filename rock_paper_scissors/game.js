let computerChoice = "";

const getComputerChoice = () => {
  computerChoice = Math.floor(Math.random() * 2);

  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 0:
      computerChoice = "scissors";
      break;
    default:
      break;
  }
  return computerChoice;
};
getComputerChoice();

let userChoice = window.prompt('Type "rock", "paper", or "scissors');

const getUserChoice = (userChoice) => {
  let lowerCase = userChoice.toLowerCase();
  switch (lowerCase) {
    case "rock":
      userChoice = lowerCase;
      break;
    case "paper":
      return (userChoice = lowerCase);
      break;
    case "scissors":
      return (userChoice = lowerCase);
      break;
    default:
      return "Error: Choose rock, paper or scissors";
      break;
  }
};

let showUserChoice = () => alert(`You chose ${userChoice}`);
showUserChoice();

const determineWinner = () => {
  console.log("47 userChoice:", userChoice);
console.log("48 computerChoice:", computerChoice);
  const userWinPhrase = () =>
    alert(`You win, ${userChoice} beats ${computerChoice}`);
  const userLosePhrase = () =>
    alert(`You lose, ${computerChoice} beats ${userChoice}`);
    console.log("end computerChoice:", computerChoice);
  if (userChoice === computerChoice) {
    alert(`Tie Game, you both chose ${userChoice}`);
  } else if (userChoice === "rock") {
    computerChoice === "paper" ? userWinPhrase() : userLosePhrase();
  } else if (userChoice === "paper") {
    computerChoice === "rock" ? userWinPhrase() : userLosePhrase();
  } else if (userChoice === "scissors") {
    return computerChoice === "paper" ? userWinPhrase() : userLosePhrase();
  }
};

determineWinner();