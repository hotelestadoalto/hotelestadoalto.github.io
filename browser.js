var sBrowser, sUsrAg = navigator.userAgent;
var $galeria = document.querySelector(".galeria");
var $textoLema = document.querySelector(".textolema");
var $imglema = document.querySelector(".imglema");
var $imagenlema = document.querySelector(".imagenlema");
var $suscripcionnbtn = document.querySelector(".suscripcion");
var pagewidth = window.innerWidth;

if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
}

if(sBrowser=="Mozilla Firefox"){
    $galeria.style.gridTemplateColumns = "auto auto";
    $galeria.style.width = "80%";
    $galeria.style.margin = "90px auto 20px auto";
    $textoLema.style.width = "80%";
    $imglema.style.flexBasis = "40%";
    $imagenlema.style.width = "100%";
    $suscripcionnbtn.style.width = "90%"
    if(pagewidth<600){
        $imglema.style.display = "none";
        $textoLema.style.flexBasis = "100%"
    }
}
