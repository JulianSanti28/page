document.addEventListener('DOMContentLoaded', ()=>{
    let images = document.getElementsByClassName('image-slide')
    if (images.length>0){
        getImageSlide(images)
    }

    let caracteristica = document.getElementById('caracteristica');
    let caracteristica_index= document.getElementById('caracteristica-index');
    console.log(caracteristica_index)
    let array = ["Desarrollador", "Disciplinado ", "Autodidácta", "Estudiante", ]
    let i = 0
    setInterval(function() {
        console.log(i)
        if(i == array.length){
            i=0
        }
        if(caracteristica != undefined){
            caracteristica.innerHTML = array[i]
        } 

        if(caracteristica_index != undefined){
            caracteristica_index.innerHTML = array[i]
        } 
        
        
        i++
   }, 1500  )
    
})
var myIndex = 0;
function getImageSlide(images){
    
    for(let i = 0; i<images.length;i++){
        images[i].style.display = 'none'
    }
    myIndex++;
    if (myIndex > images.length) {myIndex = 1}    
    images[myIndex-1].style.display = "block";  
    setTimeout(function() {
        getImageSlide(images)
    }, 2500); 
}


