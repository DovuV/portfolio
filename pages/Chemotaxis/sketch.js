"use strict"

var b = new Array();
var cat = 1;

function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw() {
    background(0);
    fill(255, 0, 0);
    rect(0, 0, 100, 100);
    fill(0);
    textSize(18);
    text("cancer", 19, 50);
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
        if (second() % 3 == 0) {
            cat += (int)(Math.random() * 3);
        }
    }
    for (var i = 0; i < cat; i++) {
        b.push(new Bacteria((int)(Math.random() * 275), (int)(Math.random() * 275)));
        b[i].show();
        b[i].move();
    }
}


class Bacteria {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xincreasing = false;
        this.yincreasing = false;
    }
    move() {
        this.x += (Math.random() * 3) + 1;
        this.y += (Math.random() * 3) + 1;
        
        if (this.x > 275 || !this.xincreasing) {
            this.x -= (Math.random() * 3) + 1;
            this.xincreasing = false;
        }
        if (this.x < 200 || this.xincreasing) {
            this.x += (Math.random() * 3) + 1;
            this.xincreasing = true;
        }
        if (this.y > 275 || !this.yincreasing) {
            this.y -= (Math.random() * 3) + 1;
            this.yincreasing = false;
        }
        if (this.y < 200 || this.yincreasing) {
            this.y += (Math.random() * 3) + 1;
            this.yincreasing = true;
        }
    }

    show() {
        fill(225);
        ellipse(this.x, this.y, 10, 10);
        if (mouseX > 0 && mouseX < 200 && mouseY > 0 && mouseY < 100) {
            fill(225, 0, 0);
            ellipse(this.x, this.y, 10, 10);
        }
    }
}