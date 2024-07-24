document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('city__canvas');
    const ctx = canvas.getContext('2d');
    const canvasBack=document.getElementById('city__canvasBack'); 
       const ctxB= canvasBack.getContext('2d');
    const xs=0;
    const xy=window.innerHeight/2;
    var b1w=window.innerWidth*0.125;
    var b1h=(window.innerHeight/2)*0.75;
    var b2w=window.innerWidth*0.1;
    var b2h=(window.innerHeight/2)*0.625;
    var b3w=window.innerWidth*0.15;
    var b3h=(window.innerHeight/2)*0.875;
    var b4w=window.innerWidth*0.1875;
    var b4h=(window.innerHeight/2)*0.5;
    var b5w=window.innerWidth*0.1125;
    var b5h=(window.innerHeight/2)*0.55;
    function drawBuilding(ctx, x, y, width, height, color) {
        // Draw the building
        ctx.fillStyle = color;
        ctx.fillRect(x, y - height, width, height);

        // Draw windows
        const windowRows = Math.floor(height / 30);
        const windowCols = Math.floor(width / 20);
        ctx.fillStyle = '#fce803'; // Light yellow for windows

        for (let row = 0; row < windowRows; row++) {
            for (let col = 0; col < windowCols; col++) {
                const windowX = x + 5 + col * 20;
                const windowY = y - height + 5 + row * 30;
                ctx.fillRect(windowX, windowY, 10, 20);
            }
        }
    }
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvasBack.width=window.innerWidth;
        canvasBack.height=window.innerHeight;
    }

    function drawCityscape() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height/2);
       
        // Draw multiple buildings
       
        drawBuilding(ctx, 0, xy, b1w, b1h-(b1h*0.05), '#6b8f99'); 
        drawBuilding(ctx, b1w+(b1w*0.05), xy, b2w, b2h, '#00008B'); 
        drawBuilding(ctx, b2w+(b2w*0.05)+b1w+(b1w*0.05), xy, b3w, b3h-(b3h*0.05), '#6b8f99'); 
        drawBuilding(ctx, b3w+(b3w*0.05)+b2w+(b2w*0.05)+b1w+(b1w*0.05), xy, b4w, b4h-(b4h*0.05), '#6b8f99'); 
        drawBuilding(ctx, b4w+(b4w*0.05)+b3w+(b3w*0.05)+b2w+(b2w*0.05)+b1w+(b1w*0.05), xy, b5w, b5h, '#6b8f99'); 
    }
    function drawCityscapeBack() {
        // Clear the canvas
        ctxB.clearRect(0, 0, canvasBack.width, canvasBack.height/2);

        // Draw multiple buildings
        drawBuilding(ctxB, b1w/2, xy, b1w, b1h, '#A52A2A'); 
        drawBuilding(ctxB, 50+b1w/2+b1w, xy, b2w, b2h, '#00008B'); 
        drawBuilding(ctxB, 50+b1w/2+b1w+b2w, xy, b3w, b3h, '#8B4513'); 
        drawBuilding(ctxB,50+b1w/2+b1w+b2w+b3w, xy, b4w, b4h, '#228B22');
        drawBuilding(ctxB, 50+b1w/2+b1w+b2w+b3w+b4w, xy, b5w, b5h, '#A52A2A'); 
    }

    // Initialize the cityscape
    resizeCanvas();
    drawCityscape();
    drawCityscapeBack();
});