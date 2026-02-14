document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById('misha-text');
    const videoWrapper = document.getElementById('video-wrapper');
    const videoElement = document.getElementById('skull-video');

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const runCycle = async () => {
        // --- FASE 1: APARECE MISHA ---
        textElement.classList.add('text-visible');

        // Misha se queda en pantalla brillando
        await wait(6000);

        // --- FASE 2: CAMBIO A VIDEO ---
        // Misha empieza a irse (tarda 3s)
        textElement.classList.remove('text-visible');

        // Video empieza a aparecer (tarda 3s)
        // Como el video tiene animación perpetua en CSS, ya se está moviendo al aparecer.
        videoElement.play();
        videoWrapper.classList.add('video-fade-in');

        // Dejamos el video solo un rato
        await wait(8000);

        // --- FASE 3: CAMBIO A MISHA (El momento crítico) ---
        
        // 1. Quitamos la clase de visibilidad al video.
        // GRACIAS AL CSS, EL VIDEO SEGUIRÁ MOVIÉNDOSE (zoom) MIENTRAS LA OPACIDAD BAJA A 0.
        videoWrapper.classList.remove('video-fade-in');

        // 2. Esperamos un poco (1.5s) para que el video esté a medio borrar (translucido)
        await wait(1500);

        // 3. Hacemos aparecer a Misha sobre el video que todavía se mueve y desvanece
        textElement.classList.add('text-visible');

        // 4. Esperamos a que termine la transición del video (el resto de los 3s)
        await wait(2000);

        // 5. Reiniciamos lógica (pausamos video oculto para ahorrar memoria)
        videoElement.pause();
        videoElement.currentTime = 0;

        // Reiniciamos el ciclo (Ya Misha está visible, así que esperamos lo que falta)
        // Restamos el tiempo que ya pasó en la transición
        setTimeout(() => {
            cycleLoop();
        }, 4000); 
    };

    // Función bucle para que sea infinito
    const cycleLoop = async () => {
        // Misha se va
        textElement.classList.remove('text-visible');
        
        // Video entra
        videoElement.play();
        videoWrapper.classList.add('video-fade-in');
        
        await wait(8000);
        
        // Video se va (siguiendo moviéndose)
        videoWrapper.classList.remove('video-fade-in');
        
        await wait(1500);
        
        // Misha entra
        textElement.classList.add('text-visible');
        
        await wait(2000);
        videoElement.pause();
        videoElement.currentTime = 0;
        
        setTimeout(cycleLoop, 4000);
    }

    // Iniciar primera vez
    runCycle();
});