// fectching 
const countValue=document.querySelector('#counter');

// increment function
let increment=()=>{
    // get the value from ui 
    let value=parseInt(countValue.innerText);
    // let is use because we changing the value by incr,decr
    // if we use const it will give error
    // update the value
    value=value+1;
    //set the value into ui
    countValue.innerText=value;
};

// decrement function
let decrement=()=>{
    let value=parseInt(countValue.innerText);
    if(value>0){
    value=value-1;
    }
    countValue.innerText=value;
};