const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const width = 450;
const height = 450;

ctx.canvas.width = width + 50;
ctx.canvas.height = height + 50;

const valueAmount = width / 10;
const arr = [];

let previousValue = 50;
ctx.strokeStyle = "red";

ctx.beginPath();
ctx.moveTo(50, height);
ctx.lineTo(500, height);

ctx.moveTo(50, 0);
ctx.lineTo(50, 450);

ctx.stroke();



for (let i = 0; i < height / 50; i++) {
    ctx.strokeText(i * 50, 25, 450 - (i * 50));
}

ctx.strokeStyle = "black";
let i = 5;
    
    setInterval(function() {
        if (i < valueAmount) {
            i++;
        } else {
            return
        }
    const r = Math.random() * height;
    arr.push(r);

    ctx.moveTo(i * 10, height - previousValue);
    ctx.lineTo((i * 10) + 10, height - r);
    ctx.stroke();

    const ost = i % 5;
    if (ost === 0) {
        ctx.strokeText(i - 5, i * 10, height + 25);
    }

    previousValue = r;
}, 200);

console.log(arr);

