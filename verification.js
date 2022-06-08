var $name = document.getElementById("name");
var $email = document.getElementById("email");
var $submit = document.getElementById("subb");
var arrobaValidacion = false;
var puntoValidacion = false;
var cadenaValidacion = false;

$submit.addEventListener("click", function(){
    for(inputValueE of $email.value){
        if(inputValueE=="@"){
            arrobaValidacion = true;
        }else if(inputValueE=="."){
            puntoValidacion = true;
        }
        if($email.value.length >5){
            cadenaValidacion = true;
        }
    }

    if(arrobaValidacion==true&puntoValidacion==true&cadenaValidacion==true&$name.value.length>4){
        alertify.success("Enviado con éxito");
        $name.value = "";
        $email.value = "";
        arrobaValidacion = false;
        puntoValidacion = false;
        cadenaValidacion = false;
    }else{
        if(arrobaValidacion==false||puntoValidacion==false||cadenaValidacion==false){
            alertify.error('Email Invalido');
        }if($name.value.length<4){
            alertify.error('Nombre Invalido');
        }
    }
})