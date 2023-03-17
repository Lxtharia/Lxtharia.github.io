let auraElement = document.getElementById("color-aura");
let cursorTrackingDivs = document.getElementsByClassName("cursor-tracking");
let cursorCrosshair = document.getElementById("cursor-crosshair")
let rotateOffset = 0;

//styling in javascript, just because i might need it
let crossHairSize = 70;
cursorCrosshair.style.width = cursorCrosshair.style.height = crossHairSize + "px";

let mouseX, mouseY;

function updateTrackingCursorPosition() {
    for (let CTdiv of cursorTrackingDivs){
        CTdiv.style.left = window.scrollX + mouseX + "px";
        CTdiv.style.top = window.scrollY + mouseY  + "px";
    }
}
function stylesOnMouseDown() {
    rotateOffset -= 45;
    // cursorCrosshair.style.width = crossHairSize*4/5 + "px";
    // cursorCrosshair.style.height = crossHairSize*4/5 + "px";
    cursorCrosshair.style.rotate = rotateOffset-10+"deg";
    auraElement.className += " onmousedown-color"
}

function stylesOnMouseUp() {
    // cursorCrosshair.style.width = crossHairSize + "px";
    // cursorCrosshair.style.height = crossHairSize + "px";
    cursorCrosshair.style.rotate = rotateOffset + "deg";
    auraElement.className = auraElement.className.replace(/\b\s*onmousedown-color\b/, '');
}

addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateTrackingCursorPosition()
});
addEventListener("scroll", updateTrackingCursorPosition);
addEventListener("mousedown", stylesOnMouseDown);
addEventListener("mouseup", stylesOnMouseUp);