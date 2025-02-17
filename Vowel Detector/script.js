
//VOWEL DETECTOR

const userInput = prompt("Enter any alphabet");
const x = userInput.toLowerCase()
const y = /[aeiou]/g;
console.log(y);

if (x==y){
    document.write("This is a vowel.");
}
else if (!y){
    document.write("This is a consonant.");
}
else{
    document.write("Invalid input!! I asked for an alphabet🙄")
}



 