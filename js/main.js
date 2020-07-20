// Neomorphic Clock

function toggleTheme() {
    if (document.body.className == 'th1') {
        document.body.className = 'th2';
    } else {
        document.body.className = 'th1';
    }
}

document.onclick = toggleTheme;



var clock = document.getElementById('border'), k = 180 / Math.PI, deg;

var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
    deg = Math.atan((event.pageX - window.innerWidth / 2) / Math.abs(event.pageY - window.innerHeight / 2)) * k;

    if (event.pageY > window.innerHeight / 2) {
        deg *= -1;
        deg += 180;
    }

    // console.log(deg);

    clock.style.transform = 'translate(-50%, -50%) rotate(' + deg + 'deg)'; 
}

setInterval(() => {
    let day = new Date();

    h.style.transform = 'translate(-50%, -50%) rotate(' + (day.getHours() % 12) * 30 + 'deg)';
    m.style.transform = 'translate(-50%, -50%) rotate(' + day.getMinutes() * 6 + 'deg)';
    s.style.transform = 'translate(-50%, -50%) rotate(' + day.getSeconds() * 6 + 'deg)';
})