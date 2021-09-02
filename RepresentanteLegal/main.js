
//********************************************************************************************************** */

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');//arreglo de todos los inputs, el numeral es porque es un ID

const expresiones = {//objeto

    nombre1: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    otronom: /^[a-zA-ZÀ-ÿ\s]{1,150}$/, // Letras y espacios, pueden llevar acentos.
    apellido1: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    apellido2: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    identi: /^\d{10}$/, // 7 a 14 numeros.
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

let nombres = ['nombre1', 'otronom', 'apellido1', 'apellido2', 'correo', 'identi', 'telefono']//comentario para git 2

let grup = ['grupo__nombre1', 'grupo__otronom', 'grupo__apellido1', 'grupo__apellido2', 'grupo__correo', 'grupo__identi', 'grupo__telefono']

const campos = {//objeto en donde todas sus variables se encuentran el false
    nombre1: false,
    otronom: false,
    apellido1: false,
    apellido2: false,
    correo: false,
    identi: false,
    telefono: false,
    documento:false,
    persona:false,
    municipio:false
}
const validarFormulario = (e) => {//funcion de tipo flecha que es evaluada con keyup
    switch (e.target.name) {//Evalua el name del input

        case "nombre1":
            validarInformacion(expresiones.nombre1.test(e.target.value), 'grupo__nombre1', 'nombre1')
            break;

        case "otronom":
            validarInformacion(expresiones.otronom.test(e.target.value), 'grupo__otronom', 'otronom')
            break;

        case "apellido1":
            validarInformacion(expresiones.apellido1.test(e.target.value), 'grupo__apellido1', 'apellido1')
            break;

        case "apellido2":
            validarInformacion(expresiones.apellido2.test(e.target.value), 'grupo__apellido2', 'apellido2')
            break;

        case "correo":
            validarInformacion(expresiones.correo.test(e.target.value), 'grupo__correo', 'correo')

            break;

        case "identi":

            validarInformacion(expresiones.identi.test(e.target.value), 'grupo__identi', 'identi')
            break;

        case "telefono":

            validarInformacion(expresiones.telefono.test(e.target.value), 'grupo__telefono', 'telefono')
            break;

        case "documento":

            selectvalue('documento','grupo__documento','error_casilla1')
            break;
        
        case "persona":

            selectvalue('persona','grupo__persona','error_casilla2')
            break;

        case "persona":

            selectvalue('municipio','grupo__municipio','error_casilla3')
            break;

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

var btn = document.querySelector('.fomulario__btn')
btn.addEventListener('click', (e) => {
    e.preventDefault();//previene que sea enviado

    if (campos.nombre1 && campos.otronom && campos.apellido1 && campos.apellido2 && campos.correo && campos.telefono && campos.identi && campos.documento && campos.persona && campos.municipio) {
        formulario.reset();// se reinician todos los campos del formulario
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');//borra los iconos 
        });

        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')


        document.getElementById('documento').classList.remove('formulario__grupo-incorrecto')
        document.getElementById('error_castilla1').classList.remove('formulario__input-error-activo');
    }
    else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')

        for (var i = 0; i < 7; i++) {
            var y = document.getElementById(nombres[i]);
            if (y.value == "") {
                validarInfo2(grup[i], nombres[i])
            }

            y = "";
        }
    }
})

function validarInformacion(campoAValidar, grupoAValidar, variable) {

    var x = document.getElementById(variable);
  
    if (x.value == "") {

        document.getElementById(grupoAValidar).classList.add('formulario__grupo-incorrecto')

        document.getElementById(grupoAValidar).classList.remove('formulario__grupo-correcto')

        document.querySelector('#' + grupoAValidar + ' i').classList.add('fa-times-circle');
        document.querySelector('#' + grupoAValidar + ' i').classList.remove('fa-check-circle');

        document.querySelector('#' + grupoAValidar + ' .formulario__input-errorn').classList.add('formulario__input-error-activo');
        document.querySelector('#' + grupoAValidar + ' .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos[variable] = false;
    }

    if (x.value != "") {
        console.log(x);
        document.getElementById(grupoAValidar).classList.add('formulario__grupo-incorrecto')

        document.getElementById(grupoAValidar).classList.remove('formulario__grupo-correcto')

        document.querySelector('#' + grupoAValidar + ' i').classList.add('fa-times-circle');
        document.querySelector('#' + grupoAValidar + ' i').classList.remove('fa-check-circle');
        document.querySelector('#' + grupoAValidar + ' .formulario__input-error').classList.add('formulario__input-error-activo');
        document.querySelector('#' + grupoAValidar + ' .formulario__input-errorn').classList.remove('formulario__input-error-activo');

        campos[variable] = false;
    }

    if (campoAValidar) {//se accede a el valor en el input 
        document.getElementById(grupoAValidar).classList.remove('formulario__grupo-incorrecto')

        document.getElementById(grupoAValidar).classList.add('formulario__grupo-correcto')

        document.querySelector('#' + grupoAValidar + ' i').classList.add('fa-check-circle');
        document.querySelector('#' + grupoAValidar + ' i').classList.remove('fa-times-circle');
        document.querySelector('#' + grupoAValidar + ' .formulario__input-error').classList.remove('formulario__input-error-activo');
        document.querySelector('#' + grupoAValidar + ' .formulario__input-errorn').classList.remove('formulario__input-error-activo');
        document.getElementById(variable).classList.add('formulario__input-color') //ponerle color al input 
        campos[variable] = true;
    }
}
function validarInfo2(grupoAValidar, variable) {
    document.getElementById(grupoAValidar).classList.add('formulario__grupo-incorrecto')

    document.getElementById(grupoAValidar).classList.remove('formulario__grupo-correcto')

    document.querySelector('#' + grupoAValidar + ' i').classList.add('fa-times-circle');
    document.querySelector('#' + grupoAValidar + ' i').classList.remove('fa-check-circle');

    document.querySelector('#' + grupoAValidar + ' .formulario__input-errorn').classList.add('formulario__input-error-activo');
    document.querySelector('#' + grupoAValidar + ' .formulario__input-error').classList.remove('formulario__input-error-activo');
    campos[variable] = false;
}

function selectvalue(variable,grupo,casilla,sele){

    var docu=document.getElementById(variable) ;
    console.log(variable)
    if(docu.value=='' || docu.value=='--Seleccionar--'){
        document.getElementById(grupo).classList.add('formulario__grupo-incorrecto')
        document.getElementById(casilla).classList.add('formulario__input-error-activo');
        
        campos[variable] = false; 
    }

    if(docu.value!='' && docu.value!='--Seleccionar--'){

        document.getElementById(grupo).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(casilla).classList.remove('formulario__input-error-activo');
        document.getElementById(variable).classList.add('formulario__input-color') //ponerle color al input   
        document.getElementById(sele).disabled = true;
        campos[variable] = true;
        
    }
}


//****************************************boton de editar(lapiz)************************************* */
function habilitar() {

    console.log('funciona')
    document.getElementById('nombre1').disabled = false;
    document.getElementById('otronom').disabled = false;
    document.getElementById('apellido1').disabled = false;
    document.getElementById('apellido2').disabled = false;
    document.getElementById('identi').disabled = false;
    document.getElementById('correo').disabled = false;
    document.getElementById('telefono').disabled = false;
    document.getElementById('guardar').disabled = false;
    document.getElementById('documento').disabled = false;
    document.getElementById('persona').disabled = false;
    document.getElementById('municipio').disabled = false;
}

function deshabilitar() {

    document.getElementById('nombre1').disabled = true;
    document.getElementById('otronom').disabled = true;
    document.getElementById('apellido1').disabled = true;
    document.getElementById('apellido2').disabled = true;
    document.getElementById('identi').disabled = true;
    document.getElementById('correo').disabled = true;
    document.getElementById('telefono').disabled = true;
    document.getElementById('guardar').disabled = true;
    document.getElementById('documento').disabled = true;
    document.getElementById('persona').disabled = true;
    document.getElementById('municipio').disabled = true;
}


const form = document.getElementById('formulario');
form.addEventListener('click', function (event) {
    event.preventDefault(); //previene su comportamiento por defecto 
})

document.getElementById('btn-lapiz').addEventListener('click', function () { habilitar() });
document.getElementById('cancelar').addEventListener('click', function () { deshabilitar() });

document.getElementById('documento').addEventListener('click', function () { selectvalue('documento','grupo__documento','error_casilla1','sele1') });
document.getElementById('guardar').addEventListener('click', function () { selectvalue('documento','grupo__documento','error_casilla1','sele1') });

document.getElementById('persona').addEventListener('click', function () { selectvalue('persona','grupo__persona','error_casilla2','sele2') });
document.getElementById('guardar').addEventListener('click', function () { selectvalue('persona','grupo__persona','error_casilla2','sele2') });

document.getElementById('municipio').addEventListener('click', function () { selectvalue('municipio','grupo__municipio','error_casilla3','sele3') });
document.getElementById('guardar').addEventListener('click', function () { selectvalue('municipio','grupo__municipio','error_casilla3') ,'sele3'});












