document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('sky_canvas');
    const ctx = canvas.getContext('2d');
    const c1= (window.innerWidth*0.037);
    const cw= c1*3;
    const cm1=(window.innerWidth-cw)/3;
    const clouds = [
        { x: 50+((window.innerWidth/2)-(cw+40)), y: window.innerHeight*0.08, baseWidth: window.innerWidth*0.037, baseHeight:(window.innerWidth*0.037)/2, pulse: 0, growing: true, frequency: 0.018, amplitude: 5 },
        { x: 50+c1+10+((window.innerWidth/2)-(cw+40)), y: window.innerHeight*0.04, baseWidth: window.innerWidth*0.037+10, baseHeight:(window.innerWidth*0.037+10)/2, pulse: 0, growing: true, frequency: 0.015, amplitude: 8 },
        { x: 50+(c1+30)*2+((window.innerWidth/2)-(cw+40)), y: window.innerHeight*0.06,  baseWidth: window.innerWidth*0.037+30, baseHeight:(window.innerWidth*0.037+30)/2, pulse: 0, growing: true, frequency: 0.01, amplitude: 6 }
    ];
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        //animate();
    }

    function drawCloud(ctx, x, y, width, height) {
        const largeRadius = height / 2;
        const smallRadius = largeRadius / 2;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.moveTo(x + largeRadius, y);
        ctx.arcTo(x + width, y, x + width, y + height, largeRadius);
        ctx.arcTo(x + width, y + height, x, y + height, largeRadius);
        ctx.arcTo(x, y + height, x, y, largeRadius);
        ctx.arcTo(x, y, x + width, y, largeRadius);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x + width / 4, y, smallRadius, 0, Math.PI * 2);
        ctx.arc(x + width / 2, y, largeRadius, 0, Math.PI * 2);
        ctx.arc(x + (3 * width) / 4, y, smallRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
     function drawCloudSecond(ctx, x, y, width, height) {
        const largeRadius = height / 2;
        const smallRadius = largeRadius / 2;

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.moveTo(x + largeRadius, y);
        ctx.arcTo(x + width, y, x + width, y + height, largeRadius);
        ctx.arcTo(x + width, y + height, x, y + height, largeRadius);
        ctx.arcTo(x, y + height, x, y, largeRadius);
        ctx.arcTo(x, y, x + width, y, largeRadius);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x + width / 4, y, smallRadius, 0, Math.PI * 2);
        ctx.arc(x + (1.6*width /4), y, smallRadius, 0, Math.PI * 2);
        ctx.arc(x + ( 1.3*width) / 2, y, largeRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var i=0; 
        clouds.forEach(cloud => {
            ctx.save();
            const pulseWidth = cloud.baseWidth + cloud.pulse;
            const pulseHeight = cloud.baseHeight + cloud.pulse;
            if(i==1)
                {
                    drawCloudSecond(ctx, cloud.x, cloud.y, pulseWidth, pulseHeight);
                    
                }else{
                    drawCloud(ctx, cloud.x, cloud.y, pulseWidth, pulseHeight);
                }
            ctx.restore();
           
            if (cloud.growing) {
                cloud.pulse += cloud.amplitude * cloud.frequency;
                if (cloud.pulse > cloud.amplitude) {
                    cloud.growing = false;
                }
            } else {
                cloud.pulse -= cloud.amplitude * cloud.frequency;
                if (cloud.pulse < -cloud.amplitude) {
                    cloud.growing = true;
                }
            }
            i++;
        });

        requestAnimationFrame(animate);
    }

 
    function animateSec() {
        clouds.forEach(cloud => {
            cloud.x += 0.5;
            if (cloud.x - cloud.size > canvas.width) {
                cloud.x = -cloud.size;
            }
        });
       
        requestAnimationFrame(animate);
    }

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
});