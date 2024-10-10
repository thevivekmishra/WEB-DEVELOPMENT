//creating first promise
let wada1= new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('setTimeout1 started');
    },2000);
    resolve(true);
})

//creating promise 2 
let output=wada1.then(()=>{
    let wada2 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('setTimeout2 started');
        },3000);
        resolve("wada2 resolved");
    })
    return wada2;
})
output.then((value)=>console.log(value));