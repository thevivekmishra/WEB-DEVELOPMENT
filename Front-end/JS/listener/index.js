//js work on document DOM so we have to create a object 

// let content=document.querySelector('.box');
// //adding event
// content.addEventListener('click',function(){
//     content.style.background='green';
// });

// removeEventListener does not work because of different memory reference 
// to remove we have to create same function 

// content.removeEventListener('click',function(){
//     content.style.background='green';
// });


// let content=document.querySelector('.box');
//  function content(){
//     content.style.background='yellow';
//  }
//  document.addEventListener('click',content);
//  document.removeEventListener('click',content);


//event object-display lot's of info
let content=document.querySelector('.box');
 content.addEventListener('click',function(vivek){
    console.log(vivek);
    //open console window and click on the box 
    //all events were shown
 })