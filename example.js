// let name = "Rajesh";  //Data types variables
// var age =25;            
// var hasHobby = true;   // boolean 
// name ="kumar";
// function displayuser(userName, userAge,userHasHobby){     // function creating
//     return 'user name is '+userName+'\n'+ 
//     'age is '+userAge+'\n'+
//     'has hobby? '+userHasHobby;

// }
// console.log(displayuser(name,age,hasHobby));  //Arguments

// const sum =  (a,b)=>   // arrow function
// {
//     return a+b;

// }
// console.log(sum(1,2));
// const expres=require('express');
// const app= expres();

 app.get('/node',function(req,res){
     res.send("Hi welcome Node Js")
     res.json;
   }).listen(9090)

function add(a,b){
    return a+b
}
result = add(4,5)
console.log("The ouput is " + result)