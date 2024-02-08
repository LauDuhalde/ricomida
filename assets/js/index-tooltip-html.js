const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {

    /*alert de envio*/
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente.");
    });
    
   /*cambio de color de texto*/
   $("h3:contains('INGREDIENTES')").on("dblclick", function() {
    $(this).css("color", "red"); // Cambiar el color del texto a rojo
  });

  // Seleccionar el título "PREPARACIÓN" y añadir el evento de doble clic
  $("h3:contains('PREPARACIÓN')").on("dblclick", function() {
    $(this).css("color", "red"); // Cambiar el color del texto a rojo
  });

    /*Toggle card*/
    $(".card-title").click(function () {
        $(".card-text").toggle();
        $(".card-img-top").toggle();
    });
    


});