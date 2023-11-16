function makeGreen (){
    document.body.style.backgroundColor = 'green'
}

const redButton = document.getElementById('make-red');
redButton,onclick= makeRed;
function makeRed(){
    document.body.style.backgroundColor = 'red'
}

const purpleButton = document.getElementById('purple');
purpleButton.onclick = function (){
    document.body.style.backgroundColor = 'purple'
}