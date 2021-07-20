let btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("previne el default")
})