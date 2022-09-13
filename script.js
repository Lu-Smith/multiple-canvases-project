//canvas1
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const container1 = document.getElementById('container1');
const particlesArray1 = [];

canvas1.width = container1.offsetWidth;
canvas1.height = container1.offsetHeight;

window.addEventListener('resize', function(){
    canvas1.width = container1.offsetWidth;
    canvas1.height = container1.offsetHeight;
})

const mouse1 = {
    x: undefined,
    y: undefined,
}

canvas1.addEventListener('click', function(event) {
    mouse1.x = event.x - canvas1.getBoundingClientRect().left;
    mouse1.y = event.y - canvas1.getBoundingClientRect().top;
})

canvas1.addEventListener('mousemove', function(event) {
    mouse1.x = event.x - canvas1.getBoundingClientRect().left;
    mouse1.y = event.y - canvas1.getBoundingClientRect().top;
})

class Particle1 {
    constructor(){
        //this.x = mouse1.x;
        //this.y = mouse1.y;
        this.x = Math.random() * canvas1.width;
        this.y = Math.random() * canvas1.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(){
        ctx1.fillStyle = '#4CDDE8';
        ctx1.strokeStyle = '#56FFF8';
        ctx1.lineWidth = 3;
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx1.fill();
        ctx1.stroke();
    }
}

function init1(){
    for ( let i = 0; i < 100; i++) {
        particlesArray1.push(new Particle1());
    }
}

init1();

function handleParticle1() {
    for ( let i = 0; i < particlesArray1.length; i++) {
        particlesArray1[i].update();
        particlesArray1[i].draw();
    }
}

function animate1() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    handleParticle1();
    requestAnimationFrame(animate1);
}

animate1();



//canvas2
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const container2 = document.getElementById('container2');

canvas2.width = container2.offsetWidth;
canvas2.height = container2.offsetHeight;

window.addEventListener('resize', function(){
    canvas2.width = container2.offsetWidth;
    canvas2.height = container2.offsetHeight;
    ctx2.fillStyle = 'white';
    ctx2.beginPath();
    ctx2.moveTo(10, 10);
    ctx2.lineTo(80, 10);
    ctx2.lineTo(10, 80);
    ctx2.fill();

    ctx2.strokeStyle = 'red';
    ctx2.lineWidth = 6;
    ctx2.beginPath();
    ctx2.moveTo(95, 95);
    ctx2.lineTo(95, 25);
    ctx2.lineTo(25, 95);
    ctx2.closePath();
    ctx2.stroke();
})