document.addEventListener('DOMContentLoaded', ()=>{
    let caracteristica = document.getElementById('caracteristica');
    let array = ["Desarrollador", "Disciplinado ", "Autodidácta", "Estudiante", ]
    let i = 0
    setInterval(function() {
        console.log(i)
        if(i == array.length){
            i=0
        }
        caracteristica.innerHTML = array[i]
        i++
   }, 1500  )
    
})
