const form = document.getElementById("form");
const successSection = document.getElementById("successSection");
const messageSent = document.getElementById("successMessage");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const message = document.getElementById("message");

window.onload = function () {
  $("#successSection").hide();
};

(function () {
  emailjs.init("user_6RkM9Tahr3OkRQtLACcpW");
})();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (successSection.style.display === "none") {
    $("#successSection").show();
  }
  nombre.classList.add("inputs--disable");
  email.classList.add("inputs--disable");
  message.classList.add("inputs--disable");
  btnSubmit.classList.add("btnSannu--disable");
  messageSent.innerHTML = "¡Mensaje enviado!";

  emailjs.sendForm("service_y5bvfmt", "template_vc7u9mi", this).then(
    function () {
      window.location.href = "#";
      console.log("Mensaje Enviado");
    },
    function (error) {
      console.log("No se pudo enviar el Email", error);
    }
  );
  form.reset();
});
