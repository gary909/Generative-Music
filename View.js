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
	view.drawCircle(context, 150, 150, 100, 1);
};

View.prototype.drawCircle = function(context, x, y, radius, alpha) {
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI);
	context.fillStyle = "rgba(" + x%256 + ", " + y%256 + ", " + (x * y % 256) + " ," + alpha + ")";
	context.fill();
}
