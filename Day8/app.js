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

function changeHeader(color){
    var h1=document.getElementById('h1');
    h1.innerHTML = 'Day 8 Learn text';
    h1.style.color = color;
    h1.style.backgroundColor = 'pink';
}

function changeColor(eleVar){
    // alert();
    color = eleVar.value;
    // alert(color);
    changeHeader(color)
}