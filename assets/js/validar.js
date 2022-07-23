function validar(){

    /*creo una variable de tipo booleano que en principio tendrá un valor true(verdadero),
    y que se convertirá en false(falso) cuando la condición no se cumpla*/
    let todo_correcto = true;
    
    //validar DPI
    
    if(dpi.value.length != 13 ){
        todo_correcto = false;

    }
    if(dpi.value.match(/[^0-9]/g)){
        todo_correcto = false;
    }
    
    //validar nombre y apellido

    if(nameUser.value.length < 2 && nameUser.value.length > 30){
        todo_correcto = false;
    }
    if(lastname.value.length < 2 && lastname.value.length > 30){
        todo_correcto = false;
    }

    if (address.value.length < 6 && address.value.length > 100){    
        todo_correcto = false;
    }

    if (gender.value == ''){
        todo_correcto = false;
    }

    //obtener la fecha actual
    let fechaActual = new Date();
    //obtener la fecha de nacimiento
    let fechaNacimiento = new Date(birthdate.value);
    //validar que la fecha de nacimiento no sea mayor a la fecha actual
    if(fechaNacimiento > fechaActual){
        todo_correcto = false;
    }

    //validar un archivo adjunto con la variable photo
    var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

    if(!allowedExtensions.exec(photo.value)){

        modal_container.classList.add('show');
        titulo.innerHTML = 'Error en la foto';
        mensaje.innerHTML = 'Por favor subir un archivo con extensión .jpeg/.jpg/.png/. ';
        fileInput.value = '';
        todo_correcto = false;
    }
    
  // Si la extensión obtenida no está incluida en la lista de valores
  // del atributo "accept", mostrar un error.
  if(document.getElementById('archivo').getAttribute('accept').split(',').indexOf(extension) < 0) {
    alert('Archivo inválido. No se permite la extensión ' + extension);
  }
  
    
    /*Por último, y como aviso para el usuario, si no está todo bién, osea, si la variable
    todo_correcto ha devuelto false al menos una vez, generaremos una alerta advirtiendo
    al usuario de que algunos datos ingresados no son los que esperamos.*/
    if(!todo_correcto){
        modal_container.classList.add('show');
        titulo.innerHTML = 'Error en el formulario';
        mensaje.innerHTML = 'Por favor verifique los datos ingresados sean correctos y cumplan con los requisitos.';
    } else{
            alert('Datos correctos');   
    }
    }