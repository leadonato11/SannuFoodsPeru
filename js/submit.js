const btnSubmit = document.getElementById("btnSubmit");
const form = document.getElementById("form");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const emailValue = document.getElementById("email").value;
const messageInput = document.getElementById("message");

/* window.onload = function () {
  const errorSection = document.getElementById("errorSection");
  errorSection.style.display = "none";
}; */

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  validarForm();
});

emailValue.addEventListener("change", (event) => {



  if (event.target.value === "") {
    button.disabled = true; //button remains disabled
    showErrorSection();
  } else {
    button.disabled = false; //button is enabled
  }
});

function validarForm() {
  
}

function showErrorSection() {
  $("#email").addClass("errorValidation");
  $("#btnSubmit").addClass("btnSannu--disable");
  $("#errorSection").fadeIn();
  $("#emailErrorMessage").fadeIn("slow");
}
