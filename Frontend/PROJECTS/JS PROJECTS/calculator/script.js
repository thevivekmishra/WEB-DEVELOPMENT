let display=document.querySelector('.display');
let btn=document.querySelectorAll('button');

let string = "";   //to store result
let arr = Array.from(btn);

arr.forEach(btn => {
     btn.addEventListener('click' ,(e) =>{

        if(e.target.innerHTML == '='){
            string = eval(string);  // inbuilt function
            display.value=string;
        }

        else if(e.target.innerHTML == 'AC'){
            string="";
            display.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1)
            display.value=string;
        }
         else{
            string += e.target.innerHTML; //input is added inside string
            display.value = string;
         }
     })


});