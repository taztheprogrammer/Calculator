const current = document.getElementById('current');
const pre = document.getElementById("pre");

const btn = document.getElementsByClassName('btn');
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide")
const clear = document.getElementById("clear")
const modulo = document.getElementById("modulo")
const equal = document.getElementById("equal");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', displayChange);
}



function switchDisplay() {
    pre.innerHTML = current.innerHTML;
    current.innerHTML = ""
}

let operation = '';

function Add() {
    operation = '+';
    switchDisplay();
}

function Minus() {
    operation = '-';
    switchDisplay();
}

function Times() {
    operation = '*';
    switchDisplay();
}

function Modulo() {
    operation = '%';
    switchDisplay();
}

function Clear() {
    pre.innerHTML = '';
    current.innerHTML = '';
    operation = '';
}

function Divide() {
    operation = '÷';
    switchDisplay();
}

function Equal() {
if (operation === '+' ){
    const result = parseFloat(pre.innerHTML) + parseFloat(current.innerHTML);
    pre.innerHTML = current.innerHTML;
    current.innerHTML = result;
} else if (operation === '-' ){
    const result = parseFloat(pre.innerHTML) - parseFloat(current.innerHTML);
    pre.innerHTML = current.innerHTML;
    current.innerHTML = result;
} else if (operation === '*' ){
    const result = parseFloat(pre.innerHTML) * parseFloat(current.innerHTML);
    pre.innerHTML = current.innerHTML;
    current.innerHTML = result;
} else if (operation === '÷'){
    const result = parseFloat(pre.innerHTML) / parseFloat(current.innerHTML);
    pre.innerHTML = current.innerHTML;
    current.innerHTML = result;
} else if (operation === '%') {
    const result = parseFloat(pre.innerHTML) % parseFloat(current.innerHTML);
    pre.innerHTML = current.innerHTML;
    current.innerHTML = result;
} else if (operation === '') {
}
}


function displayChange() {
    if (this.innerHTML === '+') {
        add();
    } else if(this.innerHTML === '-') {
        minus();
    } else if(this.innerHTML === 'x') {
        times();
    } else if(this.innerHTML === '÷') {
        divide();
    } else if(this.innerHTML === '=') {
        equal();
    } else if(this.innerHTML === '%') {
        modulo();
    }else if(this.innerHTML === '(' || this.innerHTML ===')'){
        
    }else {
        const temp = current.innerHTML;
        current.innerHTML = temp + this.innerHTML;
    }
}



add.addEventListener('click', Add);
minus.addEventListener('click', Minus)
equal.addEventListener('click', Equal)
times.addEventListener('click', Times)
divide.addEventListener('click', Divide)
modulo.addEventListener('click', Modulo)
clear.addEventListener('click', Clear)
