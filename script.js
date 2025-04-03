const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lampada');
 
function lampOn () {
    lamp.src = './lampada-ligada.png'
}
 
function lampOff () {
    lamp.src = './lampada-desligada.png'
}
 
ligar.addEventListener('click',lampOn);
desligar.addEventListener('click',lampOff);