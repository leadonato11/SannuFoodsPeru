const btnSubmit = document.getElementById("btnSubmit");
const form = document.getElementById("form");
const nombreInput = document.getElementById("nombre");
const nombreValue = document.getElementById("nombre").value;
/* $(document).ready(function () {
  $(".error").hide();
}); */

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("hice click en submit");
  validarEmail();
  validarMensaje();
});

function validarNombre() {
  const nombre = document.getElementById("nombre").value;

  if (nombre === "" || nombre === null) {
    console.log("Nombre vacio");
    /* Deshabilito boton enviar
    Coloreo el borde del input del color rojo
    muestro el div del error con el mensaje al lado del boton enviar */

    return;
  }
  if (nombre.length > 30) {
    console.log("Nombre con mas de 30 caracteres");

    /* Deshabilito boton enviar
    Coloreo el borde del input del color rojo
    muestro el div del error con el mensaje al lado del boton enviar */

    return;
  }
}

function validarForm() {
  const invalidChars =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailInput = document.getElementById("email");
  const emailValue = document.getElementById("email").value;

  if (email != "" && email.match(invalidChars)) {
    emailValue;
  } else {
    emailInput.className("errorValidation")
    console.log("mail invalido");

    button.disabled = true

    /* Deshabilito boton enviar
    Coloreo el borde del input del color rojo
    muestro el div del error con el mensaje al lado del boton enviar */

    return;
  }
}

function validarMensaje() {
  const message = document.getElementById("message").value;
  if (message === "" || message === null) {
    console.log("mensaje vacio");

    /* Deshabilito boton enviar
    Coloreo el borde del input del color rojo
    muestro el div del error con el mensaje al lado del boton enviar */
  }
  if (message.length > 300) {
    console.log("300 caracteres máximo");

    /* Deshabilito boton enviar
    Coloreo el borde del input del color rojo
    muestro el div del error con el mensaje al lado del boton enviar */
  }
}

function emailSuccess() {
  /* Deshabilito form
    muestro el div con el mensaje de correo enviado al lado del boton enviar */
}
