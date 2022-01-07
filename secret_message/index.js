let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push('to', 'program');

let index = secretMessage.indexOf('easily')
secretMessage[index] = 'right';

secretMessage.shift();
secretMessage.unshift('Programming');
let firstIndex = secretMessage.indexOf('get')
let secondIndex = secretMessage.indexOf('time');
secretMessage.splice(firstIndex, secondIndex, 'know');

console.log(secretMessage.join(' '));