document.addEventListener('DOMContentLoaded', function() {
    const build1 = document.getElementById('city__canvas');
   
    const build2=document.getElementById('city__canvasBack');
    
    const contText = document.querySelector('.container__backmessage');
    const textBg = document.getElementById('backmessage__hb');
    const textSm = document.getElementById('backmessage__hs');
    function initBuilding() {
        build1.style.left = window.innerWidth*0.8 + 'px';     
        build2.style.left = window.innerWidth*0.8 + 'px';
       
    }
    
    function initText(){
        var width_text = window.innerWidth/3;
        var height_text = window.innerHeight/2;
        textBg.style.fontSize= width_text/6+ 'px';
        textBg.style.height='auto';
        textSm.style.fontSize= width_text/8 + 'px';
        textSm.style.height='auto';
        textBg.style.lineHeight=width_text/6+ 'px';

         
       
        contText.style.width=width_text+'px';
        contText.style.paddingTop =height_text/4+ 'px';
      

        contText.style.left=width_text+width_text/6+'px';

    }
    function init(){
        initBuilding();
        initText();
    }
   
    init();
    window.addEventListener('resize', init);
});
window.onresize = function(){    location.reload();}
