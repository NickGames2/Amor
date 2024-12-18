// Mostrar mensaje al presionar el botón
function mostrarMensaje() {
    alert("¡Te amo muchísimo, Aide! 💖");
}

// Función para crear corazones flotantes
function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.innerHTML = '❤️';
    corazon.classList.add('corazon');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    corazon.style.left = `${x}px`;
    corazon.style.top = `${y}px`;
    corazon.style.position = 'absolute';

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 3000); // Elimina el corazón después de 3 segundos
}

// Generar corazones cada 800 milisegundos
setInterval(crearCorazon, 800);
