// let num= prompt("enter any number");
// if(num%2==0 && num%3==0)
// {
//  console.log("enterd number is divisble by 2 and 3")
// }
// else{
//     console.log("entered number is not divisible by 2 and 3 ")
// }


// printing number using loop

// for(let i=0;i<=100;i++){
//     console.log(i)
// }


// addition using for loop

// let sum=0;
// let n =prompt("enter any number");
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);

// for in loop

// let obj={
//     vivek :90,
//     aman:80,
//     harsh:80,
//     ankit:70,

// }
// for (let n in obj)
// console.log(n + obj[n]);

// function

//without function
// let a =6;
// let b=5;
// let c=10;

// console.log("average of a+b is " + (a+b)/2);
// console.log((b+c)/2);
// console.log((c+a)/2);

//with functin

// function avg(x,y){
//     return ((x+y)/2)
// }
// let m =6;
// let n=5;
// let o=10;

// console.log(avg(m,n));
// console.log(avg(n,o));
// console.log(avg(o,m))

// let myName="vivek kumar"
// console.log(myName.replace("developer","vivek "))

// array

// let arr=[1,2,3,4,5]
// console.log(arr);

// let c=arr.join("-");
// console.log(c)

// arr.pop()
// console.log(arr)

// arr.push(10)
// console.log(arr)

// let arr=[1,2,3,4,5,6,7]
// delete arr[0]
// console.log(arr)
// console.log(arr.length)

// let a1=[1,2,3,4,5]
// let a2=[7,8,9,10]
// let num=a1.concat(a2)
// console.log(num);

// let num=[7,100,20,50,2]
// num.sort()
// console.log(num)

//to sort in ascending or descending order we have to create function

// let compare = (a,b)=>{
//     return a-b
// }

// let num=[7,100,20,50,2]
// num.sort(compare)
// console.log(num)

//splice 
// let num=[1,2,3,4,5]
// num.splice(2,2,101,102)
// console.log(num )

// let number = [2,4,6,7,8]
// for(let i of number){
//     console.log(number)
// }

// let arr=[45,23,21]
// let a = arr.map((value,index,array) => {
//     console.log(value,index,array)
//     return value+1;
// })
// console.log(a)

// let arr=[1,5,66,45,67]
// let a=arr.filter((a)=>{
//     return a<10
// })
// console.log(a)

// vivek={a:1,b:2,c:3,d:4}
// console.table(vivek)

// console.time("forloop")
// for(let i=0;i<5;i++){
//     console.log("vivek")
// }
// console.timeEnd("forloop")

// alert("enter any number")
// let a=prompt() //user input
// console.log(a)
// console.log("you entered a type ="+(typeof a )) //string

// alert("enter any number")
// let a=prompt() //user input
// console.log(a)
// a=Number.parseInt(a)

// console.log("you entered a type ="+(typeof a )) //string

//confirmation

// alert("enter any number")
// let a = prompt()
// a=Number.parseInt(a)
// alert("data type="+(typeof a))
// let write=confirm("do you want to write ")
// if(write){
//     document.write(a)
// }
// else{
//     document.write("allow to write ")
// }

// location.href="https://thevivekmishra.github.io/solarsystem/"

// let age=prompt("enter your age ")
// age=Number.parseInt(age)

// const canDrive=(age)=>{
//     return age>=18?true:false;
// }
// if(canDrive(age)){
//     alert("you can drive ")
// }
// else{
//     alert("you cannot drive ")
// }



let runAgain = true;

const canDrive = (age) => {
    return age >= 18 ? true : false;
}

while (runAgain) {
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);

    if (canDrive(age)) {
        alert("You can drive.");
    } else {
        alert("You cannot drive.");
    }

    runAgain = confirm("Do you want to play again?");
}

