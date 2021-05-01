let screenX;
let screenY;

const a = 0.1;
const b = 1;
let distance_;
let width_;
let time_;

function setup() {
    createCanvas(windowWidth * 0.9, windowHeight * 0.9);
    
    screenX = (windowWidth / 2) * 0.9;
    screenY = (windowHeight / 2) * 0.9;
    
    textSize(30);
    
    width_ = 50;
}

function draw() {
    background(255);
    smooth();
    
    noStroke();
    fill(color(150));
    circle(screenX, screenY, width_);
    
    distance_ = sqrt(sq(screenX - mouseX) + sq(screenY - mouseY));
    time_ = a + b * log(distance_ / width_ + 1);
    
    text("Distance : " + distance_, 20, 40);
    text("Width : " + width_, 20, 70);
    text("Time : " + time_, 20, 100);
    
    strokeWeight(4);
    stroke(100)
    line(mouseX, mouseY, screenX, screenY);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        if (width_ < 200) {
        width_ = width_ + 10;
        }
    } else if (keyCode === DOWN_ARROW) {
        if (width_ > 0) {
        width_ = width_ - 10;
        }
    }
}