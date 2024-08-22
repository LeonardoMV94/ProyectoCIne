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
        $("#formulario").css("background-color", "rgb(69, 69, 94)");
    });
    $('#formulario').mouseout(function(){
        $("#formulario").css("background-color", "rgb(101, 162, 226)");
});

$('#btnEnviar').click(function(){
    alert("Formulario enviado correctamente");
});

});

