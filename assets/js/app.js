/** 
 * Validación de formulario
*/

let form = document.querySelector('#userDataForm');
let dpi = document.querySelector('#dpi');
let nameUser = document.querySelector('#name');
let lastname = document.querySelector('#lastname');
let address = document.querySelector('#address');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let birthdate = document.querySelector('#birthdate');
let age = document.querySelector('#age');
let gender = document.querySelector('#gender');
let genderOption = gender.options[gender.selectedIndex].value
let photo = document.querySelector('#photo');
let submit = document.querySelector('#submit');

const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
let titulo = document.querySelector('#modal_title');
let mensaje = document.querySelector('#modal_message');

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
  });                                                                                 
dpi.addEventListener('change', (e) =>{
    //validar el dpi
    if(dpi.value.length == 13 ){
        dpi.classList.remove('is-invalid');
        submit.disabled = false;
    }else{
        dpi.classList.add('is-invalid');
        submit.disabled = true;
        modal_container.classList.add('show');
        titulo.innerHTML = 'Error en el DPI';
        //añadir mensaje al modal
        mensaje.innerHTML = 'El DPI no es valido, por favor verifique. ';
    }
});

nameUser.addEventListener('change', (e) =>{
   validateNames(nameUser);
});

lastname.addEventListener('change', (e) =>{
    validateNames(lastname); 
 });

address.addEventListener('change', (e) =>{
    //validar que tenga una longitud de al menos 6 caracteres y maximo 100
    if(address.value.length >= 6 && address.value.length <= 100){
        address.classList.remove('is-invalid');
        submit.disabled = false;
    }
    else{
        address.classList.add('is-invalid');
        submit.disabled = true;
        modal_container.classList.add('show');
        titulo.innerHTML = 'Error en la dirección';
        mensaje.innerHTML = 'La dirección no es valida, minimo de 6 caracteres y maximo 100. ';
    }
});

phone.addEventListener('change', (e) =>{
    //validar que sean 8 numeros exactos positivos y que no tenga signos
    if(phone.value.length == 8 && phone.value.match(/[^0-9]/g) == null){
        phone.classList.remove('is-invalid');
        submit.disabled = false;
    }
    else{
        phone.classList.add('is-invalid');
        submit.disabled = true;
        modal_container.classList.add('show');
        titulo.innerHTML = 'Error en el teléfono';
        mensaje.innerHTML = 'Ingrese un teléfono valido, minimo de 8 digitos y sin signos. ';
    }
    
});

email.addEventListener('change', (e) =>{
    //validar una expresion regular para el correo
    if(email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
        email.classList.remove('is-invalid');
        submit.disabled = false;
    }
    else{
        email.classList.add('is-invalid');
        submit.disabled = true;
        modal_container.classList.add('show');
        titulo.innerHTML = 'Error en el correo';
        mensaje.innerHTML = 'El correo no es valido, por favor verifique. ';
        
    }
    
});

//Realiza el cambio de fecha al escuchar un cambio en el input de fecha de nacimiento.

birthdate.addEventListener('change', (e) =>{
    //obtener la fecha actual
    let fechaActual = new Date();
    //obtener la fecha de nacimiento
    let fechaNacimiento = new Date(birthdate.value);
    //validar que la fecha de nacimiento no sea mayor a la fecha actual
    if(fechaNacimiento <= fechaActual){
        birthdate.classList.remove('is-invalid');
        submit.disabled = false;
    }
    else{
        birthdate.classList.add('is-invalid');
        submit.disabled = true;
        modal_container.classList.add('show');
        titulo.innerHTML = 'Error en la fecha de nacimiento';
        mensaje.innerHTML = 'La fecha de nacimiento no puede ser mayor a la fecha actual. ';
    }
    //calcular la edad
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    //validar el mes de nacimiento con el mes actual
    if(fechaActual.getMonth() < fechaNacimiento.getMonth()){
        edad--;
    }
    //mostrar la edad
    age.value = edad;
});

let validateNames = (name) =>{
    //validar el nombre
    if(name.value.length >= 2 && name.value.length < 30){
        name.classList.remove('is-invalid');
        submit.disabled = false;
    }else{
        name.classList.add('is-invalid');
        submit.disabled = true;
        if (name == nameUser){
            modal_container.classList.add('show');
            titulo.innerHTML = 'Error en el nombre';
            mensaje.innerHTML = 'El nombre no es valido, minimo de 2 caracteres y maximo 30. ';
        }
        else{
            modal_container.classList.add('show');
            titulo.innerHTML = 'Error en el apellido';
            mensaje.innerHTML = 'El apellido no es valido, minimo de 2 caracteres y maximo 30. ';
        }
    }
}

//validar solo letras
function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z ]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

