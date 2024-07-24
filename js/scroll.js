document.addEventListener('DOMContentLoaded', function() {
const width_sun =document.querySelector('.pulse').offsetWidth;    
document.querySelector('.pulse').style.height=width_sun+'px';
let value=0;
let delivery_block = document.querySelector('.container__delivery');
const main_container = document.querySelector('.container').offsetWidth;
let position=0;
let left_block = delivery_block.offsetLeft;
let top_block =delivery_block.offsetTop;
let width_block =delivery_block.offsetWidth;
let height_block=delivery_block.offsetHeight;
let radius_block =parseFloat(window.getComputedStyle(delivery_block).borderRadius);
let old_value=0;
var toDawn=false;
const leftTitleDelivery = parseInt(getCssPropertyByClass('container__backmessage','left'),10);
const leftCity=parseInt(getCssProperty('city__canvas','left'),10);
const leftCityBack=parseInt(getCssProperty('city__canvasBack','left'),10);
const leftRoadmark =parseInt(getCssProperty('roadmark__canvas','left'),10);
const leftCar =parseInt(getCssProperty('car__canvas','left'),10);
let leftWheelRear=null;
let leftWheelFront=null;
const leftHaust=parseInt(getCssProperty('haust__canvas','left'),10);

const coff = window.innerWidth/47;
let message_block =document.querySelector('.container__message');
let message_left=message_block.offsetLeft;
let message_opacity =window.getComputedStyle(message_block).getPropertyValue("opacity");
let message_zIndex=window.getComputedStyle(message_block).getPropertyValue('z-index');
    
const text_elements = document.querySelectorAll('.animate-on-scroll');


    text_elements.forEach(element => {
        const text = element.getAttribute('data-text');
        element.innerHTML = '';
        const space = document.createTextNode(' ');
        for (let char of text) {
            const span = document.createElement('span');
           
            span.textContent = char;
            element.appendChild(span);
        }
    });

    var text_length =document.getElementById("animated__message").offsetWidth;
   window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const scrollPercent = scrollTop / (docHeight - windowHeight);
    showRotatedWheels();
   });

document.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        toDawn=true;
        if(value>0)
        value--;
        position+=(event.deltaY*-1);
    } else {
        toDawn=false;
        if(value<=23)
        value++;
        position-=event.deltaY;
    }
    if(leftWheelFront==null){ leftWheelFront=parseInt(getStyleParam('wheelfront__canvas','left'),10);}
    if(leftWheelRear==null){ leftWheelRear=parseInt(getStyleParam('wheelrear__canvas','left'),10);}
    if(delivery_block.offsetLeft>=0 && value<24 ){
        if(((value/23)*100)<50)
        delivery_block.style.clipPath="circle("+((value)/23)*100+"% at 0% 50%)";
    else 
        delivery_block.style.clipPath="circle("+((value)/23)*100+"% at "+(((value)/23)*100)/2+"% 50%)";
    }

    if(toDawn && delivery_block.offsetLeft>=left_block && value>=0){

    }
  
 
  if(value>=10 && value<=20)
    {
        var left_space = ((main_container-text_length)/2)-message_left;
        message_block.style.left=message_left+proc(left_space,value*5) + 'px';
        message_opacity=1+message_opacity
        if(value<old_value && value<=12)
        { message_block.style.opacity=0;
             message_block.style.zIndex=-1;
        }
        else{
        if(value>12)   {
            message_block.style.opacity=(value-5)*0.1;
             message_block.style.zIndex=31;
        }
    }

        var start_pos =(value-10);
    text_elements.forEach(element => {
        const spans = element.querySelectorAll('span');

        const scrollPercent = Math.min(Math.max(start_pos /10, 0), 1);
        const visibleChars = Math.floor(spans.length * scrollPercent);

        spans.forEach((span, index) => {
            if (index < visibleChars) {
                span.style.transform = 'translateY(0)';
            } else {
                span.style.transform = 'translateY(100%)';
            }
        });
    });
    }
    
    moveTitle(value*coff);
     moveCity(value*coff/1.5);
     moveRoadmark(value*coff/1.5);
    // moveCar(value*coff/1.5);
     rotatedWheels(value*50);

    old_value=value;
        
});

    function moveTitle(value){
        const title = document.querySelector('.container__backmessage');
        var leftTitle = parseInt(getCssPropertyByClass('container__backmessage','left'),10);
        
        leftTitle=leftTitleDelivery+value;
        title.style.left=leftTitle+'px';
    }
    function moveCity(value){
        const city =document.getElementById('city__canvas');
        const cityBack= document.getElementById('city__canvasBack');
       
        
        city.style.left=leftCity-value+'px';
        cityBack.style.left=leftCityBack-value+'px';
    }
    function moveRoadmark(value){
        const roadmark =document.getElementById('roadmark__canvas');
        roadmark.style.left=0-value+'px';
    }
    function moveCar(value)
    {   
        var val =parseInt(value.toFixed(1));
        const car= document.getElementById('car__canvas');
        const wheelRear = document.getElementById('wheelrear__canvas');
        const wheelFront = document.getElementById('wheelfront__canvas');
        const haust =document.getElementById('haust__canvas');
        car.style.left=leftCar+val+'px';
       
       
        wheelFront.style.left=leftWheelFront+val+'px';
        wheelRear.style.left=leftWheelRear+val+'px';
        haust.style.left=leftHaust+value+'px';
       
    }
    function rotatedWheels(value){
        const wheelRear = document.getElementById('wheelrear__canvas');
        const wheelFront = document.getElementById('wheelfront__canvas');

        wheelRear.style.webkitTransform = 'rotate('+value+'deg)'; 
        wheelRear.style.mozTransform    = 'rotate('+value+'deg)'; 
        wheelRear.style.msTransform     = 'rotate('+value+'deg)'; 
        wheelRear.style.oTransform      = 'rotate('+value+'deg)'; 
        wheelRear.style.transform       = 'rotate('+value+'deg)'; 

        wheelFront.style.webkitTransform = 'rotate('+(value-15)+'deg)'; 
        wheelFront.style.mozTransform    = 'rotate('+(value-15)+'deg)'; 
        wheelFront.style.msTransform     = 'rotate('+(value-15)+'deg)'; 
        wheelFront.style.oTransform      = 'rotate('+(value-15)+'deg)'; 
        wheelFront.style.transform       = 'rotate('+(value-15)+'deg)'; 
    }
    function showRotatedWheels(){
        const wheelRear = document.getElementById('wheelrear__canvas');
        const wheelFront = document.getElementById('wheelfront__canvas');
        wheelRear.style.display="block";
        wheelFront.style.display="block";
    }
    function hideRotatedWheels(){
        const wheelRear = document.getElementById('wheelrear__canvas');
        const wheelFront = document.getElementById('wheelfront__canvas');
        wheelRear.style.display="none";
        wheelFront.style.display="none";
    }
    
    function getStyleParam(elmId,param){
        const elem = document.getElementById(elmId);
        const computedStyle = window.getComputedStyle(elem, null);
        for (const property in computedStyle) {  
            if (computedStyle.hasOwnProperty(property)) {    
                if(property === param)
                return computedStyle[property];
            }}
    }
    function getCssProperty(elmId, property){
        var elem = document.getElementById(elmId);
        return window.getComputedStyle(elem,null).getPropertyValue(property);
     }
     function getCssPropertyByClass(className, property){
        var elem = document.querySelector("."+className);
        return window.getComputedStyle(elem,null).getPropertyValue(property);
     }
 
function proc(value,proc)
{
    return (value*proc)/100;
}

});

