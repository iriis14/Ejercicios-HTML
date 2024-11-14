function comprobarDNI() {
    // Obtener el DNI introducido
    const dni = document.getElementById("DNI").value.trim();

    // Validar que el DNI tenga 9 caracteres y el último sea una letra
    if (dni.length !== 9 || !isNaN(dni.charAt(8))) {
        document.getElementById("resultado").innerText = "Formato de DNI incorrecto";
        return;
    }

    // Obtener la parte numérica y la letra por separado
    const numero = parseInt(dni.slice(0, -1), 10);
    const letraIngresada = dni.charAt(8).toUpperCase();

    // Código de letras para los DNI
    const codigo = "TRWAGMYFPDXBNJZSQVHLCKE";

    // Calcular la letra correspondiente
    const letraCalculada = codigo.charAt(numero % 23);

    // Comparar la letra ingresada con la calculada
    const resultado = (letraIngresada === letraCalculada)
        ? "Comprobación correcta"
        : "Comprobación incorrecta";

    // Mostrar el resultado
    document.getElementById("resultado").innerText = resultado;
}