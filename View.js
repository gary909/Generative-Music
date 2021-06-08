function View(canvas) {
	this.canvas = canvas;
}

View.prototype.updateDisplay = function() {
	var view = this;
	var context = view.canvas.getContext("2d");
	context.clearRect(0, 0, view.canvas.width, view.canvas.height);
	context.fillStyle = "black";
	context.fillRect(0, 0, view.canvas.width, view.canvas.height); // set background to cover canvas area
    // context.strokeStyle = "orange";
    // context.strokeRect(canvas.width-110, canvas.height-110, 100, 100)
};
