function aplicarFadeOutYRedirigir(url) {
    const body = document.body;

    // Aplicar la clase de desvanecimiento al cuerpo de la página
    body.classList.add("fade-out");

    // Redirigir después de la transición (1 segundo)
    setTimeout(function () {
        window.location.href = url;
    }, 1000); // Espera de 1 segundo antes de redirigir
}

function validateAnswer() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "cuadro";

    if (inputField.value.trim().toLowerCase() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("prueba1.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "Ups... ¿Trampas desde el principio? Prueba de nuevo.";
    }
}

function prueba1() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "grfeaefpqmuzñjt";

    if (inputField.value.trim().toLowerCase() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("prueba2.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "¡Ups! La respuesta es incorrecta. Intenta de nuevo.";
    }
}

function prueba2() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "INDIA";

    if (inputField.value.trim().toUpperCase() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("prueba3.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "¡Ups! La respuesta es incorrecta. Intenta de nuevo.";
    }
}

function prueba3() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "UNICO";

    if (inputField.value.trim().toUpperCase() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("prueba4.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "¡Ups! La respuesta es incorrecta. Intenta de nuevo.";
    }
}

function prueba4() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "regalitos";

    if (inputField.value.trim().toLowerCase() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("prueba5.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "¡Ups! La respuesta es incorrecta. Intenta de nuevo.";
    }
}

function prueba5() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "220";

    if (inputField.value.trim() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("prueba6.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "¡Ups! La respuesta es incorrecta. Intenta de nuevo.";
    }
}

function prueba6() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "sultan";

    if (inputField.value.trim().toLowerCase() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("prueba7.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "¡Ups! La respuesta es incorrecta. Intenta de nuevo.";
    }
}

function prueba7() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "te quiero";

    if (inputField.value.trim().toLowerCase() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("prueba8.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "¡Ups! La respuesta es incorrecta. Intenta de nuevo.";
    }
}

function prueba8() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "7894";

    if (inputField.value.trim() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("prueba9.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "¡Ups! La respuesta es incorrecta. Intenta de nuevo.";
    }
}

function prueba9() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "107";

    if (inputField.value.trim() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("prueba10.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "¡Ups! La respuesta es incorrecta. Intenta de nuevo.";
    }
}

function prueba10() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("error-message");
    const correctAnswer = "desesperada?";

    if (inputField.value.trim().toLowerCase() === correctAnswer) {
        inputField.classList.remove("error");
        errorMessage.textContent = "";
        aplicarFadeOutYRedirigir("final.html");
    } else {
        inputField.classList.add("error");
        errorMessage.textContent = "¡Ups! La respuesta es incorrecta. Intenta de nuevo.";
    }
}

function mostrarRegalos() {
    const divRegalos = document.getElementById("regalos");
    const boton = document.getElementById("boton");
    
    // Cambiar el display a "block" para mostrar el div de regalos
    divRegalos.style.display = "flex";
    
    // Esperar un poco antes de aplicar la animación para que el display se actualice
    setTimeout(function () {
        divRegalos.classList.add("mostrar");
    }, 50);  // Se puede ajustar el tiempo si es necesario

    // Ocultar el botón
    boton.style.display = "none";
}

// mostrar pistas
function mostrarPista(pistaId) {
    // Ocultar todas las pistas primero
    const pistas = document.querySelectorAll('.pistas p');
    pistas.forEach(pista => {
        pista.style.display = 'none';
    });

    // Mostrar la pista seleccionada
    const pistaSeleccionada = document.getElementById(pistaId);
    pistaSeleccionada.style.display = 'block';
}

// Funciones individuales para cada botón
function mostrarPista1() {
    mostrarPista('pista1');
}

function mostrarPista2() {
    mostrarPista('pista2');
}

function mostrarPista3() {
    mostrarPista('pista3');
}

function mostrarPista4() {
    mostrarPista('pista4');
}

function mostrarPista5() {
    mostrarPista('pista5');
}

function mostrarPista6() {
    mostrarPista('pista6');
}

function mostrarPista7() {
    mostrarPista('pista7');
}

function mostrarPista8() {
    mostrarPista('pista8');
}

function mostrarPista9() {
    mostrarPista('pista9');
}

function mostrarPista10() {
    mostrarPista('pista10');
}

function mostrarPista11() {
    mostrarPista('pista11');
}

function mostrarPista12() {
    mostrarPista('pista12');
}

function mostrarPista13() {
    mostrarPista('pista13');
}

function mostrarPista14() {
    mostrarPista('pista14');
}

function mostrarPista15() {
    mostrarPista('pista15');
}

function mostrarPista16() {
    mostrarPista('pista16');
}

function mostrarPista17() {
    mostrarPista('pista17');
}

function mostrarPista18() {
    mostrarPista('pista18');
}

function mostrarPista19() {
    mostrarPista('pista19');
}

function mostrarPista20() {
    mostrarPista('pista20');
}

function mostrarPista21() {
    mostrarPista('pista21');
}

function mostrarPista22() {
    mostrarPista('pista22');
}

function mostrarPista23() {
    mostrarPista('pista23');
}

function mostrarPista24() {
    mostrarPista('pista24');
}

function mostrarPista25() {
    mostrarPista('pista25');
}

function mostrarPista26() {
    mostrarPista('pista26');
}

function mostrarPista27() {
    mostrarPista('pista27');
}

function mostrarPista28() {
    mostrarPista('pista28');
}

function mostrarPista29() {
    mostrarPista('pista29');
}

function mostrarPista30() {
    mostrarPista('pista30');
}