const btn = document.getElementById('btn');
const square = document.getElementById('square');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range');

e_btn.style.display = 'none';

function changeColor() {
    const text = document.getElementById('text').value;
    square.style.backgroundColor = text;
}

function changeCircle() {
    const w = range.value;
    const h = range.value;
    const circle = document.getElementById('circle');
    circle.style.width = w + '%';
    circle.style.height = h + '%';
}