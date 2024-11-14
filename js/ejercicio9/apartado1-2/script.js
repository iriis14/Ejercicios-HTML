function cambiarColor(color) {
    // Obtener el valor del radio seleccionado
    const opcion = document.querySelector('input[name="opcion"]:checked').value;

    // Cambiar color del documento o de la capa
    if (opcion === 'doc') {
        document.body.style.backgroundColor = color;
    } else if (opcion === 'capa') {
        document.getElementById('capa').style.backgroundColor = color;
    }
}