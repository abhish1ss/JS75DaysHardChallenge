
function changeColor(){
    const color = document.getElementById('color-picker');
    const colorHexCode = color.value;
    const body = document.body;
    body.style.backgroundColor = colorHexCode;
}

function submitForm(){
    // alert();








    event.preventDefault();
    const userName = document.getElementById('user-name');
    const passWord = document.getElementById('password');
    // alert( userName.value + passWord.value);
    const passwordView = document.getElementById('password-view');
    passwordView.innerHTML = passWord.value;
    const usernameView = document.getElementById('username-view');
    usernameView.innerHTML = userName.value;
}