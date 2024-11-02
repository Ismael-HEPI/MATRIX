    const canvas = document.getElementById('canv');
    const ctx = canvas.getContext('2d');
    const w = canvas.width = document.body.offsetWidth;
    const h = canvas.height = document.body.offsetHeight;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    // Puedes cambiar los colores aquí:
    const colors = {
        background: '#000',           // Negro
        matrixDrop: '#0f0',          // Verde brillante
        wordFill: '#fff',            // Color del texto
        wordStroke: '#b700ff',          // Color del borde del texto
        rectangleFill: '#000',        // Color de fondo del rectángulo
        rectangleStroke: '#0f0'       // Color del borde del rectángulo
    };

    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, w, h);

    function matrix() {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);

        // Efecto matriz
        ctx.fillStyle = colors.matrixDrop;
        ctx.font = '15pt monospace';

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 20;
        });

        // Configuración para la palabra central
        const palabra = "HERNÁNDEZ PÉREZ";
        ctx.font = '30pt console';
        
        // Obtener dimensiones del texto
        const medidas = ctx.measureText(palabra);
        const xCentrado = (w - medidas.width) / 2;
        const yCentrado = h / 2;
        
        // Calcular dimensiones del rectángulo
        const padding = 20;
        const rectWidth = medidas.width + (padding * 2);
        const rectHeight = 80; // Altura aproximada del texto + padding
        const rectX = xCentrado - padding;
        const rectY = yCentrado - rectHeight + (padding * 1.5);

        // Dibujar rectángulo
        ctx.fillStyle = colors.rectangleFill;
        ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
        
        // Borde del rectángulo
        ctx.strokeStyle = colors.rectangleStroke;
        ctx.lineWidth = 2;
        ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);

        // Borde del texto
        ctx.strokeStyle = colors.wordStroke;
        ctx.lineWidth = 2;
        ctx.strokeText(palabra, xCentrado, yCentrado);

        // Relleno del texto
        ctx.fillStyle = colors.wordFill;
        ctx.fillText(palabra, xCentrado, yCentrado);
    }

    setInterval(matrix, 50);
