var $btnResponsive = document.getElementById("btnResponsive");
var $menu = document.querySelector(".barra");
var responsiveDesplegado = false;
var animado = document.querySelectorAll(".animar");
var $btnSuscribir = document.getElementById("suscribir");
var $emailInput = document.getElementById("emailinput");
var arrobaValidacion = false;
var puntoValidacion = false;
var cadenaValidacion = false;

$btnResponsive.addEventListener("click", function(){
    if(responsiveDesplegado==false){
        $menu.style.display = "flex";
        responsiveDesplegado = true;
    }else{
        $menu.style.display = "none";
        responsiveDesplegado = false;
    }
});

function scroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++){
        let heightAnimado = animado[i].offsetTop;
        if (heightAnimado - 510<scrollTop){
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', scroll);

$btnSuscribir.addEventListener("click", function(){
    for(inputValue of $emailInput.value){
        if(inputValue=="@"){
            arrobaValidacion = true;
        }else if(inputValue=="."){
            puntoValidacion = true;
        }
        if($emailInput.value.length >5){
            cadenaValidacion = true;
        }
    }

    if(arrobaValidacion == true & puntoValidacion == true & cadenaValidacion == true){
        alertify.success('Ha sido inscrito a nuestro boletín');
        $emailInput.value = "";
        arrobaValidacion = false;
        puntoValidacion = false;
        cadenaValidacion = false;
    }else{
        alertify.error('Verifique que su correo sea válido');
    }
});

