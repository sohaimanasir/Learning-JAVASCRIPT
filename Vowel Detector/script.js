
//VOWEL DETECTOR

const userInput = prompt("Enter any alphabet");
const x = userInput.toLowerCase()
const y = (x =="a" || x =="e" || x =="i" ||x  == "o" || x == "u");
if (y){
    document.write("This is a vowel.");
}
else if (!y){
    document.write("This is a consonant.");
}
else if (y==null || y==undefined || y== 0 || y=="" || y==!NaN){
    Document.write("Invalid input!! I asked for an alphabet🙄")
}



 