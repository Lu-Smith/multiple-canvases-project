//canvas1
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const container1 = document.getElementById('container1');
const particlesArray1 = [];
let hue1 = 0;

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
    for ( let i = 0; i < 50; i++){
        particlesArray1.push(new Particle1());
    }
    
})

canvas1.addEventListener('mousemove', function(event) {
    mouse1.x = event.x - canvas1.getBoundingClientRect().left;
    mouse1.y = event.y - canvas1.getBoundingClientRect().top;
    for ( let i = 0; i < 4; i++){
        particlesArray1.push(new Particle1());
    }
})

class Particle1 {
    constructor(){
        this.x = mouse1.x;
        this.y = mouse1.y;
        //this.x = Math.random() * canvas1.width;
        //this.y = Math.random() * canvas1.height;
        this.size = Math.random() * 25 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx1.fillStyle = 'black' ;
        ctx1.strokeStyle = 'hsl(' + hue1 + ', 100%, 80%)';
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
    //ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx1.fillStyle = 'rgba(0, 0, 0, 0.01';
    ctx1.fillRect(0, 0, canvas1.width, canvas1.height)
    handleParticle1();
    hue1++;
    requestAnimationFrame(animate1);
}

animate1();



//canvas2
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const container2 = document.getElementById('container2');
const particlesArray2 = [];
let hue2 = 0;

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
    for ( let i = 0; i < 50; i++){
        particlesArray2.push(new Particle2());
    }
    
})

canvas2.addEventListener('mousemove', function(event) {
    mouse2.x = event.x - canvas2.getBoundingClientRect().left;
    mouse2.y = event.y - canvas2.getBoundingClientRect().top;
    for ( let i = 0; i < 4; i++){
        particlesArray2.push(new Particle2());
    }
})

class Particle2 {
    constructor(){
        this.x = mouse2.x;
        this.y = mouse2.y;
        //this.x = Math.random() * canvas2.width;
        //this.y = Math.random() * canvas2.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue2 + ', 100%, 50%)';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx2.beginPath();
        ctx2.fillStyle = this.color;
        ctx2.rect(this.x, this.y, this.size, this.size);
        ctx2.fill();
    }
}



function handleParticle2() {
    for ( let i = 0; i < particlesArray2.length; i++) {
        particlesArray2[i].update();
        particlesArray2[i].draw();
        if (particlesArray2[i].size <= 0.3) {
            particlesArray2.splice(i, 1);
            i--;
        }
    }
}

function animate2() {
    //ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.fillStyle = 'rgba(0, 0, 0, 0.08';
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height)
    handleParticle2();
    hue2+=5;
    requestAnimationFrame(animate2);
}

animate2();


//canvas3
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
const container3 = document.getElementById('container3');
const particlesArray3 = [];
let hue3 = 0;

canvas3.width = container3.offsetWidth;
canvas3.height = container3.offsetHeight;

window.addEventListener('resize', function(){
    canvas3.width = container3.offsetWidth;
    canvas3.height = container3.offsetHeight;
})

const mouse3 = {
    x: undefined,
    y: undefined,
}

canvas3.addEventListener('click', function(event) {
    mouse3.x = event.x - canvas3.getBoundingClientRect().left;
    mouse3.y = event.y - canvas3.getBoundingClientRect().top;
    for ( let i = 0; i < 50; i++){
        particlesArray3.push(new Particle3());
    }
    
})

canvas3.addEventListener('mousemove', function(event) {
    mouse3.x = event.x - canvas3.getBoundingClientRect().left;
    mouse3.y = event.y - canvas3.getBoundingClientRect().top;
    for ( let i = 0; i < 4; i++){
        particlesArray3.push(new Particle3());
    }
})

class Particle3 {
    constructor(){
        this.x = mouse3.x;
        this.y = mouse3.y;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue2 + ', 100%, 50%)';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx3.fillStyle = this.color ;
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx3.fill();
    }
}



function handleParticle3() {
    for ( let i = 0; i < particlesArray3.length; i++) {
        particlesArray3[i].update();
        particlesArray3[i].draw();
        for ( let j = i; j < particlesArray3.length; j++) {
            const dx = particlesArray3[i].x - particlesArray3[j].x;
            const dy = particlesArray3[i].y - particlesArray3[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if ( distance < 50) {
                ctx3.beginPath();
                ctx3.strokeStyle = particlesArray3[i].color;
                ctx3.lineWidth = 0.5;
                ctx3.moveTo(particlesArray3[i].x, particlesArray3[i].y);
                ctx3.lineTo(particlesArray3[j].x, particlesArray3[j].y);
                ctx3.stroke();
                ctx3.closePath();
            }
        }
        if (particlesArray3[i].size <= 0.3) {
            particlesArray3.splice(i, 1);
            i--;
        }
    }
}

function animate3() {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    //ctx3.fillStyle = 'rgba(0, 0, 0, 0.08';
    //ctx3.fillRect(0, 0, canvas3.width, canvas3.height)
    handleParticle3();
    hue3+=2;
    requestAnimationFrame(animate3);
}

animate3();