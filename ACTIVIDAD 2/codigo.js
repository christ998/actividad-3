// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btn = document.getElementById("botones");

/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("resultado")
/* Obtenemos los dos input y los almacenamos en
variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
// Añadimos el evento click a la variable "btn"
btn.addEventListener("click", function (event) {
    /* Obtenemos el valor de cada input accediendo a
    su atributo "value" */
    
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    switch(event.target.id){
        case 'btn-sumar':
            resultado.innerHTML = suma(n1, n2) 
            break;
        
        case 'btn-restar':
            resultado.innerHTML = resta(n1, n2) 
            break;
        case 'btn-mult':
            resultado.innerHTML = multiplicar(n1, n2) 
            break;
        case 'btn-dividir':
            resultado.innerHTML = dividir(n1, n2) 
            break;
    }

    
});
/* Función que retorna la suma de dos números */
function suma(n1, n2) {
    // Es necesario aplicar parseInt a cada número
    return parseInt(n1) + parseInt(n2);
}
function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);

}function multiplicar(n1, n2) {
    return parseInt(n1) * parseInt(n2);

}function dividir(n1, n2) {
    return parseInt(n1) / parseInt(n2);
}
