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
