//canvas1
const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');
const container1 = document.getElementById('container1');

canvas1.width = container1.offsetWidth;
canvas1.height = container1.offsetHeight;

ctx.fillStyle = 'white';
ctx.fillRect(10, 10, 50, 50);