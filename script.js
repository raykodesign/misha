document.addEventListener("DOMContentLoaded", () => {
    // --- LÓGICA DE ANIMACIÓN (Igual que antes) ---
    const textElement = document.getElementById('misha-text');
    const videoWrapper = document.getElementById('video-wrapper');
    const videoElement = document.getElementById('skull-video');
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const runCycle = async () => {
        // Fase 1: Misha entra
        textElement.classList.add('text-visible');
        await wait(6000);

        // Fase 2: Transición a Video
        textElement.classList.remove('text-visible');
        videoElement.play();
        videoWrapper.classList.add('video-fade-in');
        await wait(8000);

        // Fase 3: Transición a Misha
        videoWrapper.classList.remove('video-fade-in');
        await wait(1500); 
        textElement.classList.add('text-visible');
        await wait(2000);

        // Reset video
        videoElement.pause();
        videoElement.currentTime = 0;
        
        // Loop
        setTimeout(cycleLoop, 4000);
    };

    const cycleLoop = async () => {
        textElement.classList.remove('text-visible');
        videoElement.play();
        videoWrapper.classList.add('video-fade-in');
        await wait(8000);
        videoWrapper.classList.remove('video-fade-in');
        await wait(1500);
        textElement.classList.add('text-visible');
        await wait(2000);
        videoElement.pause();
        videoElement.currentTime = 0;
        setTimeout(cycleLoop, 4000);
    }

    runCycle();

    // --- BLOQUE DE SEGURIDAD (ANTI-INSPECCIONAR) ---
    
    // 1. Bloquear Click Derecho (Capa extra de seguridad)
    document.addEventListener('contextmenu', event => event.preventDefault());

    // 2. Bloquear Teclas de Desarrollador
    document.onkeydown = function(e) {
        // F12
        if(e.keyCode == 123) {
            return false;
        }
        // Ctrl+Shift+I (Inspeccionar)
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        // Ctrl+Shift+J (Consola)
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        // Ctrl+U (Ver código fuente)
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
        // Ctrl+S (Guardar página)
        if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
            return false;
        }
    }
});
