console.log('Hello Sohaima');
const pizzaOrder = new Promise((resolve, reject) => {
    console.log("Processing your order");
    setTimeout(() => {
        isSuccess = true;
        if (isSuccess){
            resolve("Order accepted, Pizza on its way")
        }
        else {
            reject ("Oreder cancelled")
        }
    },2000);
})

pizzaOrder.then((message)=>{
    console.log(message);
    
})
.catch((err)=>{
    console.log(err);
    
})