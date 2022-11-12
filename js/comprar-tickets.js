//declarar las varialbes //
const TICKET = 200
const ESTUDIANTE = 0.8
const JUNIOR = 0.15
const TRAINEE = 0.5

const nombre = document.querySelector(`#nombre`)
const apellido = document.getElementById(`apellido`)
const email = document.querySelector(`#mail`)
const cantidad = document.querySelector(`#cantidadTickets`)
const categoria = document.querySelector(`#categoriaSelect`)
let totalPago = document.querySelector(`#totalPago`)
const btnClear = document.querySelector(`#btnBorrar`)
const btnResumen = document.querySelector(`#btnResumen`)

// BORRAR REGISTROS - Solo se hace desde el lado de js, con este método el botón clear tiene que escuchar click y luego ejecuta la funcion limpiar registros//

btnClear.addEventListener("click", limpiarRegistros)

function limpiarRegistros(){
    nombre.value = ``
    apellido.value = ``
    email.value = ``
    categoria.value = ``
    totalPago.textContent = ``

}


//BOTON RESUMEN - QUE DA POR RESULTADO EL TOTAL A PAGAR//

btnResumen.addEventListener("click", calcularMonto)

function calcularMonto(){
    totalPago.textContent =  (TICKET - (TICKET* calcularDescuento()))*cantidad.value;

}

function calcularDescuento (){
    switch (categoria.value){
    case "0":
    return 0;
    case "1":
    return ESTUDIANTE;
    case "2":
    return TRAINEE;
    case "3":
    return JUNIOR;
    default:
    break;
}
}


//validación de datos del formulario//

/*let datosOk = true;

function validar(){
        
    if(nombre.value.length < 2 ){
        datosOk = false;
    }
       
    if(apellido.value.length < 2 ){
        datosOk = false;
    }
        
    if(cantidad.value>1000){
        datosOk = false;
    }
            
    if(!datosOk){
    alert('Algunos campos no están correctos, vuelva a revisarlos');
    }
    
    return datosOk;

    }


const emailValido = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  }*/