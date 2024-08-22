const inputText = document.querySelector('#username')
const labelText = document.querySelector('#basic-addon1')

if(inputText != null){
    inputText.addEventListener('keyup', (event) => {
        console.log(event.key)
        labelText.innerHTML +=  event.key
        if(event.key === "Backspace" || event.key === "Delete"){
            labelText.innerHTML = 'Nombre ' + inputText.value
        }
    })
}

$(document).ready(function () {

    $('#formulario').mouseover(function(){
        $("#formulario").css("background-color", "blue");
    });
    $('#formulario').mouseout(function(){
        $("#formulario").css("background-color", "red");
});

$('#btnEnviar').click(function(){
    alert("Formulario enviado correctamente");
});

});

