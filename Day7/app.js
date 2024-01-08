function h1ColorChange(colorName, bgColorName) {
    var h1Title = document.getElementById("title");
    h1Title.style.color = colorName;
    h1Title.style.background = bgColorName;
}
function h1ResetColor(){
    h1ColorChange('black','white');
}