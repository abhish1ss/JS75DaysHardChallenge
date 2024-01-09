function size(buttonId){
    var button = document.getElementById(buttonId);
    button.style.width = "100px";
    button.style.height="40px";
    button.style.backgroundColor = "deeppink";
    button.style.color = "white";
}

function reset(buttonId){
    var button = document.getElementById(buttonId);
    button.style.width = 'inherit';
    button.style.height = 'inherit';
    button.style.backgroundColor = 'inherit';
    button.style.color = 'inherit';
}