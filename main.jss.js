let columnaactiva=1
//seleccionar las variables
const columnas=document.querySelectorAll(".columna")
//Escuchar los clicks
columnas.forEach((columna,indice)  =>{
    columna.addEventListener("click",function(){
        cambiarColumna(indice) 
    })   
})
//cambiar el esatdo de las columnas
function cambiarColumna(indice){
    columnas[columnaactiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaactiva=indice
}