function drawNewFractal(lines, drawer, fractal, iteration) {

    drawer.reset();
    let len = lines.length;
    for (let line = 0; line < len; line++) {
        let coordinate1 = new Coordinate(lines[line].coordinate1.x, lines[line].coordinate1.y);
        let coordinate2 = new Coordinate(lines[line].coordinate2.x, lines[line].coordinate2.y);
        let color = lines[line].color;
        drawer.saveNewLine(coordinate1, coordinate2, color);
    }
    drawer.scaleToSize();
    drawer.saveFractal(fractal, iteration);
}

function translateFractal(lines, drawer, newColor) {
    let len = lines.length;
    console.log(drawer.drawings);
    for (let line = 0; line < len; line++) {
        let coordinate1 = new Coordinate(lines[line].coordinate1.x, lines[line].coordinate1.y);
        let coordinate2 = new Coordinate(lines[line].coordinate2.x, lines[line].coordinate2.y);
        drawer.saveNewLine(coordinate1, coordinate2, newColor);
    }
    drawer.redraw();
}