// Code your solutions in this file

let names = []
let messages = []

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
     messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return messages;
}


function countDown(number) {
    let i = 0;
    while ( i <= number) {
        console.log(number - i);
        i++;
    }
}