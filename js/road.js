document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('roadCanvas');
    const ctx = canvas.getContext('2d');
    
   

    function resizeCanvas() {
        canvas.width = window.innerWidth+window.innerWidth/2;
        canvas.height = window.innerHeight;
        drawScene()
    }
    function drawSky() {
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height / 2);
        gradient.addColorStop(0, '#87CEEB'); 
        gradient.addColorStop(1, '#FFFFFF'); 

        // Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height / 2);
    }
   

          

         
    function drawSun() {
        const sunX = canvas.width - 100;
        const sunY = 100;
        const sunRadius = 50;

        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2, true);
        ctx.fillStyle = '#FFD700';
        ctx.fill();
    }
 
   

        function drawRoad() {
            const roadHeight = canvas.height * 0.5;
            const roadWidth = canvas.width+canvas.width/2;
            const dashWidth = 50;
            const gapWidth = 30;
            const lineWidth = roadHeight * 0.05;
           
            ctx.fillStyle = '#DCDFE2';
            ctx.fillRect(0, canvas.height / 2, roadWidth, roadHeight);

          
            // Draw green separator line
            ctx.strokeStyle = '#7ED695';
            ctx.lineWidth = 20;
            ctx.beginPath();
            ctx.moveTo(0, canvas.height /2);
            ctx.lineTo(canvas.width, canvas.height/2);
            ctx.stroke();
        }

    function drawScene() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSky();
      
        drawRoad();
    }
 
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  
});