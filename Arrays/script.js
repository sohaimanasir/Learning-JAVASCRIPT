//ARRAY (We can add number, string, boolean, etc in array)

var objectData = [{
    userName: "Sohaima",
    userAge: 22,
    userEmailId: "sohaimanasir1@gmail.com"
},
{
    userName: "A****",
    userAge: 24,
    userEmailId: "a****@gmail.com"
}    

]
//ADDING MORE ELEMENT IN ARRAY:

a= objectData[1];
console.log(a);

objectData [2]={
    userName: "Tuba",
    userAge:23,
    userEmailId:"tuba@gmail.com"
}
console.log(objectData);

//ARRAY PUSH METHOD (We can push than one elements, it will arrange it in sequence)

objectData.push({
    userName: "xyz",
    userAge:100,
    userEmailId: "Does not have email Id"
})
console.log(objectData);

//We can ask user to push elements in array 

let b = []  //an empty array
b.push(prompt("Enter anything you love"));
b.push(prompt("Enter anything you hate"));
b.push(prompt("Enter anything you want rn"));
 
console.log(b);

