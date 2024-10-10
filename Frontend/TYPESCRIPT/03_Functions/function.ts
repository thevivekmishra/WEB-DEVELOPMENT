function addTwo(num:number):number{
    return num + 2;
    // return "hello" //it does not show any error to prevent this write :number befor {
}
addTwo(10);

function getUpper(val:string){
    return val.toUpperCase();
}
getUpper("vivek");


function signUpUser(name:string,email:string,password:number){

}
signUpUser("vivek","vievk@gmail.com",1234);

//default argument
function login(name:string,email:string,isPaid:boolean=false){

}
login("vivek","vivek@gmail.com")

//return type annotation

// function getValue(myVal:number):string{
//     if(myVal > 5){
//         return true //shows error after adding string
//     }
//     return "200 OK " //shows error after adding boolean 
// }

//arrow function
const getHello = (s:string)=>{
    return ""
}

const heros = ["thor","spiderman","ironman"];

heros.map(hero => {
    return `hero is ${hero}`
})


//to temporarly remove error
export{}