(function() {
    emailjs.init("user_6RkM9Tahr3OkRQtLACcpW");
})();
window.onload = function() {
    document
        .getElementById("contact-form")
        .addEventListener("submit", function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable

            // these IDs from the previous steps
            emailjs.sendForm("service_y5bvfmt", "template_vc7u9mi", this).then(
                function() {
                    window.location.href = "#";
                    console.log('Mensaje Enviado');
                },
                function(error) {
                    console.log("No se pudo enviar el Email", error);
                }
            );
        });
};