const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const ctx = canvas.getContext('2d')

let size = 20;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown",(e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup",(e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});


canvas.addEventListener("mousemove", (e) => {
    if(isPressed) { //마우스 움직일때 눌린상태여야지만 실행
        const x2 = e.offsetX;
        const y2 = e.offsetY;    //좌표가져오기

        drawCircle(x2, y2);
        drawLine(x,y,x2,y2);
        
        x = x2;
        y = y2;
        
    }
});

function drawCircle(x,y) {
    ctx.beginPath();    //경로시작
    ctx.arc(x,y,size/2,0,Math.PI*2);  //원 그리기 (원중심좌표, 반지름크기, 원시작각도, 원끝각도)
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();    //경로시작
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();   
}

increaseBtn.addEventListener("click", (e) => {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", (e) => {
    size -= 5;
    
    if (size <5) {
        size = 5;
    }

    updateSizeOnScreen();
});

colorEl.addEventListener('change',(e) => {
    color = e.target.value;
});

clearEl.addEventListener('click',() => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
});

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}
