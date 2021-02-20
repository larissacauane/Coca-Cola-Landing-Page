function imgSlider (img) {
    document.querySelector('.coca-cola').src = img
}

function changeBackgroudColor (color) {
    const container = document.querySelector('.container')
    container.style.background = color
}

function callFunctions (img, color) {
    imgSlider(img)
    changeBackgroudColor(color)
}