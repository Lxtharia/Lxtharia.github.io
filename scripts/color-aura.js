let auraElement = document.getElementById("color-aura");
let auraRadius = 100;

auraElement.style.width = auraElement.style.height = auraElement.style.borderRadius = auraRadius + "px";

let mouseX, mouseY;

function adjustAuraPosition() {
    auraElement.style.left = window.scrollX + mouseX - auraRadius / 2 + "px";
    auraElement.style.top  = window.scrollY + mouseY - auraRadius / 2 + "px";
    // console.log("MOVED! " + e.clientX);
}

addEventListener("mousemove", (e) => {mouseX = e.clientX; mouseY = e.clientY; adjustAuraPosition()});
addEventListener("scroll", adjustAuraPosition);