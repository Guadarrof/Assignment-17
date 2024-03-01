clientName=document.getElementById("clientName");
clientAddress=document.getElementById("address");
clientEmail=document.getElementById("email");
nameError=document.getElementById("nameError");
addressError=document.getElementById("addressError");
emailError=document.getElementById("emailError");


//Funciones para validar

function stringLength(strg, minLength, maxLength){
    if (strg.length < minLength || strg.length > maxLength){
        return false;
    }else{
        return true;
    }
}

function requiredInput(strg){
    if (strg.trim() ==''){
        return false;
    }else{
        return true;
    }
}

function mostrarMensajeError(htmlElementMsg, msg)
{
    htmlElementMsg.innerText = msg;
    htmlElementMsg.style.display = "block";
    validOrder=false
}

function limpiarMensajeError(htmlElementMsg)
{
    htmlElementMsg.innerText = "";
    htmlElementMsg.style.display = "none";
}


//Validate name

function validateName(strg){
        if(requiredInput(strg)){        
            if(stringLength(clientName.value, 2, 30)){ 
                limpiarMensajeError(nameError);  
            } else {
                let mensaje="Este campo requiere entre 2 y 30 caracteres.";
                mostrarMensajeError(nameError,mensaje);
                validOrder=false;
            }
        }
        else
        {
            let mensaje="Este campo es Obligatorio.";
            mostrarMensajeError(nameError, mensaje);
            validOrder=false;
    }
}


//Validate address

function validateAddress(strg){
    if(requiredInput(strg)){        
        if(stringLength(clientAddress.value, 8, 30)){ 
            limpiarMensajeError(addressError);  
        } else {
            let mensaje="Este campo requiere entre 8 y 30 caracteres.";
            mostrarMensajeError(addressError,mensaje);
            validOrder=false;
        }
    }
    else
    {
        let mensaje="Este campo es Obligatorio.";
        mostrarMensajeError(addressError, mensaje);
        validOrder=false;
}
}

//Validate email

function testEmail(mail){
    const regexp = new RegExp ("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    return regexp.test(mail);
}

function validateEmail(mail){
    if (requiredInput(mail)){
        if (testEmail(mail)){
            limpiarMensajeError(emailError);
        }else{
            let mensaje="Este campo debe completarse en formato email.";
            mostrarMensajeError(emailError, mensaje);
            validOrder=false;
        }
    }else{
        let mensaje="Este campo es Obligatorio.";
        mostrarMensajeError(emailError,mensaje);
        validOrder=false
    }
}


let submitBtn=document.getElementById("order-btn");

submitBtn.addEventListener('click', sendOrder);

function cleanForm() {
    let inputs = document.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = "";
    }
}


function sendOrder(e){
    e.preventDefault();
    validOrder=true;
    validateName(clientName.value);
    validateAddress(clientAddress.value);
    validateEmail(clientEmail.value);
    if(validOrder===true){
        alert("El pedido ha sido enviado con exito....");
        cleanForm();
    }
}
