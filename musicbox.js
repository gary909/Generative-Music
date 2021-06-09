window.onload = function() {
    var canvas = document.getElementById("canvas");
    var view = new View(canvas);

    canvas.addEventListener("click", view.handleClick, false);

    view.updateDisplay();
}