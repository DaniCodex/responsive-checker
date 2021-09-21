const id = document.getElementById('r-checker');
let ventana;
document.addEventListener('submit', e=>{
    if(e.target === id){
        e.preventDefault();
        ventana = open(id.direccion.value,'',`Width=${id.ancho.value},Height=${id.alto.value}`)
    }
})
document.addEventListener('click', e =>{
    if(e.target === id.cerrar) ventana.close();
})
