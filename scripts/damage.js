damageableElements = document.querySelectorAll(".damagable");

function damage(e) {
	console.log("Ouch!");
	for (elem of damageableElements) {
		elem.classList.remove("animateOuch");
		void elem.offsetWidth; // trigger reflow, this redraws the canvas i think
		elem.classList.add("animateOuch");
	}

}
