let input = window.prompt('What phrase would you like translated into whale talk?');

const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let v = 0; v < vowels.length; v++) {
    if (input[i] === vowels[v]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] === "e") {
    resultArray.push(input[i]);
    console.log(`type e`)
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
    console.log(`type u`);
  }
} 

alert(`${resultArray.join('').toUpperCase()} is how to say that in Whale Talk`);
