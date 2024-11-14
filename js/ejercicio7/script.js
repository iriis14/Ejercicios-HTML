// Función para calcular la potencia
function calcularPotencia() {
    // Obtener los valores de los campos de entrada
    const base = document.getElementById("base").value;
    const exponente = document.getElementById("exponente").value;

    // Validar que se introduzcan valores válidos
    if (base === "" || exponente === "") {
        document.getElementById("resultado").innerText = "Por favor, introduce ambos números.";
        return;
    }

    var resultado = 1;

    // Calcular la potencia
    for (var i = 0; i < exponente; i++) {
        resultado = resultado * base;
    }

    // Mostrar el resultado en el contenedor
    document.getElementById("resultado").innerText = `El resultado de ${base} elevado a ${exponente} es: ${resultado}`;
}