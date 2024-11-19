
// Variables principales
const words = ["html", "javascript", "css", "python", "java", "frontend", "backend"];
const selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
const maxErrors = 8;
let guessed = []; // Letras correctas
let wrongLetters = []; // Letras incorrectas
let errors = 0;
// Variables del html
const wordContainer = document.getElementById("word");
const message = document.getElementById("message");
const keyboard = document.getElementById("keyboard");
const parts = ["first", "head", "body", "arm1", "arm2", "leg1", "leg2", "final"];
const wrongLettersContainer = document.getElementById("wrongLetters");

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
        button.disabled = guessed.includes(button.textContent) || wrongLetters.includes(button.textContent);
        keyboard.appendChild(button);
    }
}

// Manejo de las letras presionadas
function handleGuess(letter) {
    // Deshabilitar el botón de la letra que se pulsó
    const button = Array.from(keyboard.getElementsByTagName("button")).find(btn => btn.textContent === letter);
    button.disabled = true;

    if (selectedWord.includes(letter)) {
        guessed.push(letter);
        if (selectedWord.split("").every(l => guessed.includes(l))) {
            message.textContent = "¡Felicidades! Ganaste🎉";
            keyboard.innerHTML = "";
        }
    } else {
        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter); // Agregar letra incorrecta
            wrongLettersContainer.textContent = wrongLetters.join(", "); // Mostrar letras incorrectas
        }
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

// Dibujar la interfaz inicial
drawWord();
drawKeyboard();