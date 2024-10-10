
const vivek=document.querySelectorAll(".image")
 
vivek.forEach(vivek =>{
    vivek.addEventListener('click',() => {
        removeActiveClasses()
        vivek.classList.add('active')
    });
});

function removeActiveClasses(){
    vivek.forEach(vivek => {
        vivek.classList.remove('active')
    });
};