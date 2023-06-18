let nombre=prompt("BIENVENIDO A LA PAGINA DEL TERMO\nIngrese su nombre.");
  while (nombre=="") {
    nombre=prompt("Este nombre no esta permitido. Ingrese nuevamente su nombre.");
  }
let argentino=prompt("Bienvenido "+nombre+". ¿Eres de la Republica Argentina?");
if (argentino=="no") {
    alert(nombre+". Lamentablemente los productos solo estan disponibles para la Republica Argentina.")    
}
else{
        let mail=prompt(nombre+". Por favor, ingrese su mail para enviarle si factura de compra.").toLowerCase();
    while (mail=="") {
        mail=prompt("Correo no permitido. Por favor ingrese nuevamente su correo electronico.");
    }
    function darGracias() {
        alert("¡MUCHAS GRACIAS!")
    }
    darGracias()
}