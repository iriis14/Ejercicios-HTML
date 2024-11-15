// Instanciamos las variables
const words = ["html", "javascript", "css", "python", "java"];
const selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
const maxErrors = 8;
let guessed = [];
let errors = 0;

const wordContainer = document.getElementById("word");
const message = document.getElementById("message");
const keyboard = document.getElementById("keyboard");
const parts = ["first", "head", "body", "leg1", "leg2", "arm1", "arm2", "final"];

// Función para dibujar la palabra
function drawWord() {
    wordContainer.innerHTML = "";
    for (let letter of selectedWord) {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = guessed.includes(letter) ? letter : "";
        wordContainer.appendChild(span);
    }
}

// Función para dibujar el teclado
function drawKeyboard() {
    keyboard.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const button = document.createElement("button");
        button.textContent = String.fromCharCode(i);
        button.addEventListener("click", () => handleGuess(button.textContent));
        button.disabled = guessed.includes(button.textContent);
        keyboard.appendChild(button);
    }
}

/*
Función para confirmar si la opción és correcta.
Si lo és, sigue jugando, pero
si la palabra está entera ha ganado,
en caso contrario se le suma un error,
si no ha llegado al máximo de errores sigue jugando
en caso contrario pierde.
*/
function handleGuess(letter) {
    if (selectedWord.includes(letter)) {
        guessed.push(letter);
        if (selectedWord.split("").every(l => guessed.includes(l))) {
            message.textContent = "¡Felicidades! Ganaste🎉";
            keyboard.innerHTML = "";
        }
    } else {
        if (errors < maxErrors) {
            const part = document.getElementById(parts[errors]);
            part.style.display = "block";
            part.style.opacity = "1";
        }
        errors++;
        if (errors === maxErrors) {
            message.textContent = `Perdiste😢😢😢 La palabra era: ${selectedWord}`;
            keyboard.innerHTML = "";
        }
    }
    drawWord();
}

drawWord();
drawKeyboard();