"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello" //it does not show any error to prevent this write :number befor {
}
addTwo(10);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("vivek");
function signUpUser(name, email, password) {
}
signUpUser("vivek", "vievk@gmail.com", 1234);
//default argument
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
login("vivek", "vivek@gmail.com");
//return type annotation
// function getValue(myVal:number):string{
//     if(myVal > 5){
//         return true //shows error after adding string
//     }
//     return "200 OK " //shows error after adding boolean 
// }
//arrow function
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
