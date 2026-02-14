body {
    background-color: #000;
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-family: 'Pinyon Script', cursive;
    
    /* --- PROTECCIÓN CONTRA COPIA --- */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* IE/Edge */
    user-select: none;         /* Estándar */
    -webkit-touch-callout: none; /* iOS Safari */
}

.main-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* --- ESTILOS DEL TEXTO ADAPTABLE --- */
#misha-text {
    /* TRUCO RESPONSIVE: clamp(mínimo, ideal, máximo) */
    /* En celular se verá de 3rem, en pantalla normal se ajustará al 20vw, y en monitor grande topará en 8rem */
    font-size: clamp(4rem, 20vw, 8rem); 
    
    color: #fff;
    font-weight: 400;
    margin: 0;
    position: absolute;
    z-index: 20;
    opacity: 0;
    transition: opacity 3s ease-in-out;
    cursor: default; /* El cursor se queda como flecha, no cambia a texto */
    pointer-events: none; /* Esto evita que siquiera el mouse detecte que hay texto ahí */
}

/* Clase visible */
.text-visible {
    opacity: 1 !important;
    animation: pulseGlow 3s infinite alternate ease-in-out;
}

@keyframes pulseGlow {
    0% { text-shadow: 0 0 5px rgba(255,255,255,0.2); }
    100% { text-shadow: 0 0 25px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.6); }
}

/* --- ESTILOS DEL VIDEO --- */
#video-wrapper {
    position: absolute;
    width: 100%; /* Ocupa todo el ancho en móvil */
    max-width: 800px;
    z-index: 5;
    opacity: 0; 
    transition: opacity 3s ease-in-out;
    display: flex;
    justify-content: center;
    
    /* Animación perpetua de movimiento */
    animation: breathe 8s infinite ease-in-out;
}

#skull-video {
    width: 90%; /* Un poco de margen en móviles */
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    mix-blend-mode: screen; 
    pointer-events: none; /* Evita que intenten guardar el video con click derecho */
}

.video-fade-in {
    opacity: 1 !important;
}

@keyframes breathe {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
}
