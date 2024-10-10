//creating promise

// let myPromise=new Promise(function( resolve, reject){
// setTimeout (function(){
//  console.log('i am inside function');
//  },10000);  //after 10 sec it will show in console window 
// resolve(1234);
// })

// console.log('vivek kumar mishra ');

// creating multiple promises

let myPromise1=new Promise(function( resolve, reject){
    setTimeout (function(){
     console.log('i am inside promise 1');
     },10000);  //after 10 sec it will show in console window 
    resolve(1234);
    })
    
    let myPromise2=new Promise(function( resolve, reject){
        setTimeout (function(){
         console.log('i am inside promise 2');
         },5000);  //after 5 sec it will show in console window 
        resolve(1234);
        })
        
        
    console.log('vivek kumar mishra ');
    