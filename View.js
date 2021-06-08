View.prototype.updateDisplay = function() {
	var view = this;
	var context = view.canvas.getContext("2d");
	context.clearRect(0, 0, view.canvas.width, view.canvas.height);
	context.fillStyle = "black";
	context.fillRect(0, 0, view.canvas.width, view.canvas.height);
};
