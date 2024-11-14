function calcularDias() {
    // Obtén los valores de nombre y edad
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;

    // Verifica que ambos campos estén llenos
    if (!nombre || !edad) {
        document.getElementById("resultado").textContent = "Por favor, ingresa tu nombre y edad.";
        return;
    }

    // Calcula el número aproximado de días vividos (365 días por año)
    const diasVividos = edad * 365;

    // Muestra el resultado
    document.getElementById("resultado").textContent = `${nombre}, has vivido aproximadamente ${diasVividos} días.`;
}