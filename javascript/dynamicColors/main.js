const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const changeColor = function() {

    const colorCode = Math.floor(Math.random()*10000);
    document.body.style.backgroundColor =`#${colorCode}`;
};
let colorInterval;
const startButton = function() {
    colorInterval = setInterval(changeColor, 80);
    console.log("start");
    start.removeEventListener('click', startButton); 
}

const startListen = start.addEventListener('click', startButton);

stop.addEventListener('click', function(){
    clearInterval(colorInterval);
    document.body.style.backgroundColor ="white";
    start.addEventListener('click', startButton);
});


