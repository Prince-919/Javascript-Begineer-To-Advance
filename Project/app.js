

const bulbSwitch = document.querySelector('#blubSwitch');
const bulb = document.querySelector('#bulb');

bulbSwitch.addEventListener('click', ()=>{
    
    // console.log(bulb.src);

    if(bulb.src.match('off')){
        bulb.src = './bulb-on.gif';
        bulbSwitch.innerHTML = "TURN OFF";
    }else{
        bulb.src = './bulb-off.gif';
        bulbSwitch.innerHTML = "TURN ON";
    }
});