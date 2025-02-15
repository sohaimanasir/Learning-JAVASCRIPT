let userName = prompt("Enter you name");
let userAge = prompt("enter your age");
let age = 18;
age = 18-userAge;
if (userAge>=18){
    console.log(`Congratulation ${userName} you are eligible. `);
}
else if (userAge<18 && userAge!=0){
    console.log(`Sorry ${userName} you are not eligible, comeback after ${age} years! 😜`);
    

}
else if (userAge=="null" || userAge=="undefined" || userAge=="" || userAge==0 || userAge==NaN){
    console.log(`${userName} are you dumb??🤨 Enter your age properly!`);
    
}





