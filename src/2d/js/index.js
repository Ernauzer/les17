const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const pi = Math.PI;
const circle = pi * 2;
// Собираем снеговика \\
function drawSnowMan (x, y, radius) {
    
    drawCircle(x, y, radius, true);
    drawSnowManFace(x, y, radius);

    drawCircle(x, y + radius * 2.4, radius / .7, true);
    drawSnowManButton(x + radius / 3, y + radius * 1.8, radius);
    drawSnowManButton(x + radius / 3, y + radius * 2.3, radius);
    drawSnowManButton(x + radius / 3, y + radius * 2.8, radius);
    drawSnowManButton(x + radius / 3, y + radius * 3.3, radius);
    drawSnowManHands(x, y, radius);

    drawCircle(x, y + radius * 5.8, radius / .5, true);
    drawSnowManButton(x + radius / 3, y + radius * 4.7, radius);
    drawSnowManButton(x + radius / 3, y + radius * 5.2, radius);
    drawSnowManButton(x + radius / 3, y + radius * 5.7, radius);
    drawSnowManButton(x + radius / 3, y + radius * 6.2, radius);
    drawSnowManButton(x + radius / 3, y + radius * 6.7, radius);
    drawSnowManButton(x + radius / 3, y + radius * 7.2, radius);
    
}
// Рисуем круг \\
function drawCircle(x, y, radius, isFill) {
    ctx.beginPath();
    ctx.fillStyle = '#fcf7bb';
    ctx.arc(x, y, radius, 0, circle, false);
    isFill ? ctx.fill() : ctx.stroke();
}
// Рисуем голову \\
function drawSnowManFace (x, y, radius) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(x - radius / 3, y - radius / 4, radius / 10, 0, circle, false);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x + radius / 3, y - radius / 4, radius / 10, 0, circle, false);
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.moveTo(x + radius / 2, y + radius / 4);
    ctx.bezierCurveTo(x, y + radius / 1.0, x - radius + radius / 3 , y + radius / 2, x - radius / 1.3, y * 1.05);
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#ed9121'
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.moveTo(x, y);
    ctx.lineTo(x - radius / 3, y + radius / 2);
    ctx.fill();
    ctx.stroke();
}
// Рисуем пуговки \\
function drawSnowManButton (x, y, radius) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ed9425';
    ctx.fillStyle = 'black';
    ctx.arc(x - radius / 3, y - radius / 4, radius / 10, 0, circle, false);
    ctx.fill();
    ctx.stroke();
}
// Рисуем ручки \\
function drawSnowManHands (x, y, radius) {
    ctx.beginPath();
    ctx.strokeStyle = '#fcf7bb';
    ctx.lineWidth = 5;
    ctx.moveTo(x + radius / 5, y + radius * 2.4);
    ctx.lineTo(x + radius * 2, y + radius / 2);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = '#fcf7bb';
    ctx.lineWidth = 5;
    ctx.moveTo(x - radius / 5, y + radius * 2.4);
    ctx.lineTo(x - radius * 2, y + radius / 2);
    ctx.stroke();
}
drawSnowMan(300, 80, 40); 




