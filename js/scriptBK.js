function calcularTotal() {
  let cantidad = document.getElementById("cantidad").value;
  let categoria = document.getElementById("categoria").value;
  let valorTicket = 200;
  let descuento = 0;
  if (categoria != "Seleccionar" && cantidad != "") {
    switch (categoria) {
      case "Estudiante":
        descuento = 0.80;
        break;
      case "Trainee":
        descuento = 0.50
        break;
      case "Junior":
        descuento = 0.15
        break;
    }
    var total = cantidad * valorTicket - (cantidad * valorTicket * descuento);
    document.getElementById("tot_Pagar").value = "Total a Pagar: $" + total;
  } else {
    document.getElementById("tot_Pagar").value = "";
  }
}

function checkInput() {
  var inputField = document.getElementById('inputField');
  var submitButton = document.getElementById('submitButton');

  if (inputField.value.trim() !== '') {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
    alert("Dale Gordo LLena los campos!");
  }
}