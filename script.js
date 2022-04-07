const btn = document.getElementById('btn');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range');

e_btn.style.display = 'none';

btn.onclick = function () {
    const text = document.getElementById('text').value;
    square.style.backgroundColor = text;
};

range.onclick = function () {
    const w = range.value;
    const h = range.value;
    const br = range.value;
    const circle = document.getElementById('circle');
    const square = document.getElementById('square');
    circle.style.width = w + '%';
    circle.style.height = h + '%';
    circle.style.borderRadius = br + '%';
    square.style.borderRadius = br + '%';
    circle.innerText = 'hi';
};