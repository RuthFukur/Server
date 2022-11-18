// (function(){
// const pi= 3.14
// function add(x,y){
//         console.log( x+y)}

// function subtract(x, y){
//       console.log( x-y)
// } 
// function multiply(x, y){
//      console.log( x*y)
// }
// function divide(x, y){
// console.log( x/y)
// }
// module.exports={
//     "add":add,
//     "subtract":subtract

// }}
// )()

exports.add = function(x, y){
    return x + y;
}
module.exports.subtract = function(x, y){
    return x - y;
}
module.exports.multiply = function(x, y){
    return x * y;
}
module.exports.divide = function(x, y){
    return x / y;
}
module.exports.pi = 3.14; 
    

   
