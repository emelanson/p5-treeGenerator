//Tree generation algo.  Recursive method.
var angle = 0;
var angleSlider, lenSlider;

function setup() {
    createCanvas(400, 400);

    angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01)
    lenSlider = createSlider(0, 150, 100, 1)


}

function draw() {
    background(51);
    angle = angleSlider.value();
    len = lenSlider.value();

    stroke(255)
    translate(200, height);
    branch(len);


}

const branch = (len) => {
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67)
        pop();
        push();
        rotate(-angle)
        branch(len * .67)
        pop();
    }
}