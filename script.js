
let sliderElement = document.queryselector("#slider");
let buttonElement = document.queryselector("#button");

let sizepassword = document.queryselector("#valor");
let password = document.queryselector("#password");

let containerpassword = document.queryselector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678910ç@><^~!";
let novasenha = "";

sizepassword.innerhtml = sliderElement.value;

slider.oninput = function(){
    sizepassword.innerhtml = this.value;
    }

    function_generatepassword(){
        alert("Vamos Gerar a Senha")
    }

