const display = document.getElementById('display');

const btn = document.getElementsByClassName('btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', displayChange);
}

function displayChange() {
    display.innerHTML = this.innerHTML;
}