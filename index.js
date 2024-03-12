const body = document.getElementsByTagName("body")[0]

function setcolor(color){
    body.style.backgroundColor = color;
}

function randomColor() {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    
    setcolor (`rgb(${red}, ${green}, ${blue})`);
}
