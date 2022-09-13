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
    for ( let i = 0; i < 10; i++){
        particlesArray1.push(new Particle1());
    }
    
})

canvas1.addEventListener('mousemove', function(event) {
    mouse1.x = event.x - canvas1.getBoundingClientRect().left;
    mouse1.y = event.y - canvas1.getBoundingClientRect().top;
})

class Particle1 {
    constructor(){
        this.x = mouse1.x;
        this.y = mouse1.y;
        //this.x = Math.random() * canvas1.width;
        //this.y = Math.random() * canvas1.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
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



function handleParticle1() {
    for ( let i = 0; i < particlesArray1.length; i++) {
        particlesArray1[i].update();
        particlesArray1[i].draw();
        if (particlesArray1[i].size <= 0.3) {
            particlesArray1.splice(i, 1);
            i--;
        }
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
const particlesArray2 = [];

canvas2.width = container2.offsetWidth;
canvas2.height = container2.offsetHeight;

window.addEventListener('resize', function(){
    canvas2.width = container2.offsetWidth;
    canvas2.height = container2.offsetHeight;
})

const mouse2 = {
    x: undefined,
    y: undefined,
}


canvas2.addEventListener('click', function(event) {
    mouse2.x = event.x - canvas2.getBoundingClientRect().left;
    mouse2.y = event.y - canvas2.getBoundingClientRect().top;
    for ( let i = 0; i < 10; i++){
        particlesArray2.push(new Particle2());
    }
})

canvas2.addEventListener('mousemove', function(event) {
    mouse2.x = event.x - canvas2.getBoundingClientRect().left;
    mouse2.y = event.y - canvas2.getBoundingClientRect().top;
})

class Particle2 {
    constructor(){
        this.x = mouse1.x;
        this.y = mouse1.y;
        //this.x = Math.random() * canvas2.width;
        //this.y = Math.random() * canvas2.height;
        this.size = Math.random() * 3 - 10;
        this.speedX = Math.random() * 4 - 1.5;
        this.speedY = Math.random() * 4 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(){   
            ctx2.strokeStyle = 'red';
            ctx2.lineWidth = 6;
            ctx2.beginPath();
            ctx2.moveTo(this.x, this.y);
            ctx2.lineTo(this.y, this.size);
            ctx2.lineTo(this.size, this.x);
            ctx2.closePath();
            ctx2.stroke();
    }
}


function handleParticle2() {
    for ( let i = 0; i < particlesArray2.length; i++) {
        particlesArray2[i].update();
        particlesArray2[i].draw();
    }
}

function animate2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    handleParticle2();
    requestAnimationFrame(animate2);
}

animate2();