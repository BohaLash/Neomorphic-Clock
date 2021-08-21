// Neomorphic Clock

document.onclick = () => {
    document.body.className = document.body.className == 'th1' ? 'th2' : 'th1';
}; // theme handler

const height = window.innerHeight / 2;
const width = window.innerWidth / 2;

const k = 180 / Math.PI;

var clock = document.getElementById('border'), deg;

var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
    deg = Math.atan((event.pageX - width) / Math.abs(event.pageY - height)) * k;

    if (event.pageY > height) {
        deg *= -1;
        deg += 180;
    }

    clock.style.transform = 'translate(-50%, -50%) rotate(' + deg + 'deg)'; 
}

setInterval(() => {
    let day = new Date();

    h.style.transform = 'translate(-50%, -50%) rotate(' + (day.getHours() % 12) * 30 + 'deg)';
    m.style.transform = 'translate(-50%, -50%) rotate(' + day.getMinutes() * 6 + 'deg)';
    s.style.transform = 'translate(-50%, -50%) rotate(' + day.getSeconds() * 6 + 'deg)';
}, 100)
