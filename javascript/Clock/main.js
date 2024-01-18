const clock = document.getElementById("clock");

// fetching current time 
var date = new Date();
var newClock = `<div> ${date.toLocaleTimeString()}</div>`; 
clock.innerHTML = newClock;
setInterval(function(){
    date = new Date();
    newClock = `<div> ${date.toLocaleTimeString()}</div>`; 
    clock.innerHTML = newClock;
    //console.log(newClock);
}, 1000);


