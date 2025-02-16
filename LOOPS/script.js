//Practicing FOR LOOP

for (var i=4;i<10; i++){
  console.log(i);
    
}

//we can write tables by using for loop

var num=5;
for (let i=1; i<=10; i++){
    console.log(`${num} * ${i} = ${num*i}`);
}

//we can take input from user for any table

var userInput= parseInt(prompt("Enter any number"));
for (let j=1; j<=10; j++){
    console.log(`${userInput} * ${j} = ${userInput*j}`);
    
}

//Example of break in for loop

for(let s= 1; s<=5; s++){
    if (s==3){
        break;
    }
    console.log("I  =" + s);
}

//Example of continue in for loop

for(let t= 1; t<=5; t++){
    if (t==3){
        continue;
    }
    console.log("J = " + t);
}

//We can write multiple tables too

for (let i = 1; i<=10; i++){
    console.log(`Table of: ${i}`);
    for(j = 1; j<=10 ; j++){
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}