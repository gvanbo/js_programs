let userName = 'Grant';
let userQuestion = 'Do you want to use the magic eight ball?';
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

userName ? alert(`Hello ${userName}`) : alert('Hello');

alert(userQuestion);

switch (randomNumber) {
    case 0:
        alert('It is certain')
        break;
    case 1:
        alert('Rhymes with NO')
        break;
    case 2:
        alert('It will cost you')
        break;
    case 3:
        alert('Yes, Yes, Yes')
        break;
    case 4:
        alert('Pretty Fly!')
        break;
    case 5:
        alert('She yells so loud')
        break;
    case 6:
        alert('Better take a shower')
        break;
    case 7:
        alert('Not today Satan!')
        break;
    default:
        break;
}
