var Axes = (function () {
    function Axes() {
    }
    Axes.draw = function (middleX, middleY, translateToMiddle, footer, axisColor, textSize, tickSize, tickStep, textShift) {
        if (translateToMiddle === void 0) { translateToMiddle = true; }
        if (footer === void 0) { footer = 'by Inspiro Club'; }
        if (axisColor === void 0) { axisColor = 'lightgrey'; }
        if (textSize === void 0) { textSize = 20; }
        if (tickSize === void 0) { tickSize = 10; }
        if (tickStep === void 0) { tickStep = 50; }
        if (textShift === void 0) { textShift = 1.6; }
        push();
        noStroke();
        textFont('System', textSize);
        stroke(axisColor);
        fill(axisColor);
        strokeWeight(1);
        line(middleX, 0, middleX, height);
        line(0, middleY, width, middleY);
        translate(middleX, middleY);
        for (var x = tickStep; x < width - middleX; x += tickStep) {
            textAlign(CENTER, TOP);
            line(x, -tickSize, x, +tickSize);
            text(x, x, tickSize * textShift);
            textAlign(CENTER, BOTTOM);
            line(-x, -tickSize, -x, tickSize);
            text(-x, -x, -tickSize * textShift);
            push();
            for (var y = tickStep; y < height - middleY; y += tickStep) {
                strokeWeight(2);
                point(x, y);
                point(-x, y);
                point(x, -y);
                point(-x, -y);
            }
            pop();
        }
        for (var y = tickStep; y < height - middleY; y += tickStep) {
            textAlign(LEFT, CENTER);
            line(-tickSize, -y, +tickSize, -y);
            text(y, tickSize * textShift, y + textSize);
            textAlign(RIGHT, CENTER);
            line(-tickSize, y, tickSize, y);
            text(-y, -tickSize * textShift, -y);
        }
        textAlign(CENTER, TOP);
        if (middleX) {
            text('X', width - middleX - tickSize * textShift - textSize / 2, -tickSize * textShift * textShift - textSize / 2);
        }
        textAlign(CENTER, TOP);
        if (middleY) {
            text('Y', +tickSize * textShift + textSize / 2, -middleY + textSize / 2);
        }
        textAlign(CENTER, BOTTOM);
        noStroke();
        text(footer, width - middleX - textWidth(footer), height - middleY - textSize);
        pop();
        if (translateToMiddle) {
            translate(middleX, middleY);
        }
    };
    return Axes;
}());
function preload() {
}
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    createCanvas(windowWidth, windowHeight);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    Axes.draw(0, 0, true);
    textSize(40);
    fill(0, 0, 255, 5);
    textAlign(CENTER);
    text("Welcome to P5js 🚀", width / 2, height / 2);
}
//# sourceMappingURL=build.js.map