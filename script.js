const current = document.getElementById('current');

const btn = document.getElementsByClassName('btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', displayChange);
}

function displayChange() {
    current.innerHTML = this.innerHTML;
}