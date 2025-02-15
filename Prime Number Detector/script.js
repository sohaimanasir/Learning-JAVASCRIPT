//PRIME NUMBER DETECTOR

var num= parseInt(prompt("Enter any Number"));

for (i=2; i<= num; i++){
    var finalResult = num % i;
    if(finalResult==0){
        console.log("Not a Prime Number");
        
        break;
    }
    else if (finalResult!==0){
        console.log("Its a Prime Number");
        break;
    }
    else{
        console.log("Enter a number");
    }

}
