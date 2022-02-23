
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by blue button name 


const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}