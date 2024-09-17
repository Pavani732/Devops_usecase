// map method
 
// const numbers = [3,4,6,1,8] ;
 
// const square = function(number){
//     return number * number;
// }
 
// const squareNumber = numbers.map(square);
// const squareNumber = numbers.map((number, index) => {
//     return `index: ${index} , ${number * number}`;
// })
// console.log(squareNumber);'
 
 
const users = [
    {firstName: "Hans", age: 24},
    {firstName: "Soni", age: 29},
    {firstName: "Jay", age: 32},
    {firstName: "Mansi", age: 26},
]
 
const userName = users.map((user) => {
    return user.firstName;
})
 
console.log(userName);
