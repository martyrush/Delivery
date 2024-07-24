document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('roadmark__canvas');
    const ctx = canvas.getContext('2d');
    
   

    function resizeCanvas() {
        canvas.width = window.innerWidth+window.innerWidth/2;
        canvas.height = window.innerHeight;
        drawRoad();
    }


    function drawRoad() {
        const roadHeight = canvas.height * 0.5;
        const roadWidth = canvas.width+canvas.width/2;
        const dashWidth = canvas.width*0.036;
        const gapWidth = canvas.width*0.04
        const lineWidth = roadHeight * 0.03;
       
        ctx.fillStyle = '#DCDFE2';
        ctx.fillRect(0, canvas.height, roadWidth, roadHeight);

        ctx.setLineDash([dashWidth, gapWidth]);
        ctx.strokeStyle = '#FFF';
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height/2 +(canvas.height/4));
        ctx.lineTo(roadWidth, canvas.height/2 +(canvas.height/4));
        ctx.stroke();
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
   
});