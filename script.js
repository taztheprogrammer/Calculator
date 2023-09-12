const current = document.getElementById('current');
const pre = document.getElementById("pre");

const btn = document.getElementsByClassName('btn');
const add = document.getElementById("add");
const minus = document.getElementById("minus");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', displayChange);
}

function switchDisplay() {
    pre.innerHTML = current.innerHTML;
    current.innerHTML = ""
}

function Add() {
    switchDisplay();
}

function Minus() {
    switchDisplay();
}

function displayChange() {
    if (this.innerHTML === '+') {
        add();
    } else {
        const temp = current.innerHTML;
        current.innerHTML = temp + this.innerHTML;
    }
}


add.addEventListener('click', Add);
minus.addEventListener('click', Minus)
