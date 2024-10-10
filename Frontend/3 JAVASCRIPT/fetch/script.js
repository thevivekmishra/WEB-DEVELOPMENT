console.log("vivek kukmar mishra ");

let API_KEY ="35dc71e4856bbccb65b5cf89c224ba78";

async function weather(){

    let city ="goa";
    
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); //use $symbol at input place 
   //now converting response into json format 
     const data =await response.json();

     //printing data
     console.log("whether data ->" , data);

     //printing data on ui
     let newPara=document.createElement('p');
     newPara.textContent=`${data?.main?.temp.toFixed(2)}°c` //degree symbol press alt+0176
   document.body.appendChild(newPara);     
}