const userInput = parseInt(prompt("Enter any number"));
const userInput2 = parseInt(prompt("Enter 2nd number"));
const userInput3 = parseInt(prompt("Enter 3rd number"));


if(userInput==userInput2 && userInput==userInput3 && userInput2==userInput3){
    document.write(`${userInput}, ${userInput2}, ${userInput3} makes equilateral triangle`);
}
else if (userInput==userInput2 || userInput2==userInput3 || userInput==userInput3){
    document.write(`${userInput}, ${userInput2}, ${userInput3} makes isoceles triangle`);
}
else{
    document.write(`${userInput}, ${userInput2}, ${userInput3} makes scalene triangle`);
}