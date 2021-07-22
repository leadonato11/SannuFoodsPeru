/* (function () {
  emailjs.init("user_6RkM9Tahr3OkRQtLACcpW");
})();

window.onload = function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    

    emailjs.sendForm("service_y5bvfmt", "template_vc7u9mi", this).then(
      function () {
        window.location.href = "#";
        console.log("Mensaje Enviado");
      },
      function (error) {
        console.log("No se pudo enviar el Email", error);
      }
    );
  });

}; */

/* Instalar emailjs con npm npm install emailjs-com --save */
/* Agregar name en los input con full-name, email y message */
{/* <input class="form-control" type="hidden" name="subject" value="Sannu Foods"> */}