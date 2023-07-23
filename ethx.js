




function moveBoxToLeft() {
    const loginBox = document.getElementById('loginBox');
    loginBox.classList.remove('move-right');
    loginBox.classList.add('move-left');
}

function moveBoxToRight() {
    const loginBox = document.getElementById('loginBox');
    loginBox.classList.remove('move-left');
    loginBox.classList.add('move-right');
}