document.addEventListener('DOMContentLoaded', function() {
    const canvas= document.getElementById('car__canvas');
    const ctx = canvas.getContext('2d');
    const haust_canvas=document.getElementById('haust__canvas');
    const ctxh=haust_canvas.getContext('2d');
    const wheelrear_canvas=document.getElementById('wheelrear__canvas');
    const ctxw=wheelrear_canvas.getContext('2d');
    const wheelfront_canvas=document.getElementById('wheelfront__canvas');
    const ctxwb=wheelfront_canvas.getContext('2d');
    let particles = []; 
    var carWidth=window.innerWidth*0.3;
    var carHeight=window.innerWidth*0.3/2.17;
    var exhaustX = canvas.width/2-((canvas.width)*0.3);
    var exhaustY = canvas.height/2+(carHeight*0.75);
    const exhaustWidth = 40;
    const exhaustHeight = 20;
    let angle = 0;
    var carX=0;
    var carY=0;
    var rearWheelX=0;
    var rearWheelY=0;
    var frontWheelX=0;
    var frontWheelY=0;
    function resizeCanvas() {
        canvas.width =window.innerWidth*0.3;
        canvas.height = window.innerWidth*0.3/2.17;
        haust_canvas.width = window.innerWidth;
        haust_canvas.height = window.innerHeight;
        
        carWidth=canvas.width;
         carHeight=carWidth/2.17;
     wheelrear_canvas.width = window.innerWidth*0.3/5.2;
        wheelrear_canvas.height = window.innerWidth*0.3/5.2;
        wheelfront_canvas.width = window.innerWidth*0.3/5.2;
        wheelfront_canvas.height = window.innerWidth*0.3/5.2;
        carWidth=canvas.width;
        carHeight=carWidth/2.17;
        updateCarPosition();
        drawCar(ctx);
        drawWheelRear(ctxw);
        drawWheelFront(ctxwb);
    }
    function drawCar(ctx){
        ctx.clearRect(0, 0,canvas.width,canvas.height);
        base_image = new Image();
        base_image.src = 'assets/img/van-21.png';
               base_image.onload = function(){
            ctx.drawImage(base_image, 0, 0,canvas.width,canvas.height);
            
        }
        canvas.style.left=carX+'px';
        wheelrear_canvas.style.top= rearWheelY+'px';
        wheelrear_canvas.style.left=rearWheelX+'px';
        wheelfront_canvas.style.top=frontWheelY+'px';
        wheelfront_canvas.style.left=frontWheelX+'px';
       
    }
    function updateCarPosition() {
        carX = window.innerWidth/2-(canvas.width);
        carY = window.innerHeight/2+(canvas.height*0.06);
        frontWheelX = carX + carWidth*0.72;
        frontWheelY = carY +carHeight*0.03;
        rearWheelX = carX + carWidth * 0.095;
        rearWheelY = carY  +carHeight*0.03;
        
    }
    function drawWheelRear(ctx){
        ctx.clearRect(0, 0, wheelrear_canvas.width, wheelrear_canvas.height);
        wheel = new Image();
        wheel.src='assets/img/wheel.png';
        var wheelSize =window.innerWidth*0.3/7.6;
        var wheelRadius = wheelSize / 2;
        var wheelX = wheelrear_canvas.width / 2;
        var wheelY =wheelrear_canvas.height / 2;
       wheel.onload = function(){
        ctx.translate(wheelX, wheelY);
        ctx.drawImage(wheel, -wheelRadius,-wheelRadius,wheelSize,wheelSize);    
        }

    }

    function drawWheelFront(ctx){
        ctx.clearRect(0, 0, wheelfront_canvas.width, wheelfront_canvas.height);
        wheelf = new Image();
        wheelf.src='assets/img/wheel.png';
        var wheelSize =window.innerWidth*0.3/7.6;
        var wheelRadius = wheelSize / 2;
         var wheelX = wheelfront_canvas.width / 2;
        var wheelY =wheelfront_canvas.height / 2;
        wheelf.onload = function(){
            ctx.translate(wheelX, wheelY);
            ctx.drawImage(wheelf, -wheelRadius,-wheelRadius,wheelSize,wheelSize);
           
        }

    }
     

           
            
            function createParticle() {
                const size = Math.random()*(canvas.height*0.08);
                particles.push({
                    x: window.innerWidth/2-((canvas.width)),
                    y: window.innerHeight/2+canvas.height*0.2 ,
                    size: size,
                    speed: Math.random() * 1 + 0.5,
                    opacity: 1
                });
            }

       

            function drawParticles(ctx) {
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                    ctx.fill();
                }
            }

            function updateParticles() {
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];
                    p.x -= p.speed;
                    p.opacity -= 0.01;
                    if (p.opacity <= 0) {
                        particles.splice(i, 1);
                        i--;
                    }
                }
            }
            function update() {
                angle += 0.05; 
                drawWheel(ctxw);
             
            }

           
            function animate() {
                ctxh.clearRect(0, 0, window.innerWidth, window.innerHeight);
              
           
                drawParticles(ctxh);
                updateParticles();
                
        
                if (Math.random() < 0.1) {
                    createParticle();
                }
                
                requestAnimationFrame(animate);
            }

            
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
     animate();
});