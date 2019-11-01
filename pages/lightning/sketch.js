'use strict';

var x = 20;
var y;
var w = 40;
var h = 40;
var speed = 3;
var velocity = Math.floor((Math.random() * 2) + 1);
var startX = 0;
var startY = 200;
var endX = 0;
var endY = 200;
var t = 0;
var increasing = true;

function setup() {
    createCanvas(400, 400);
    strokeWeight(5);
    y = height / 2;
}

function draw() {
    lightning();
}

function lightning() {
    background(0);
    fill(230, 230, 0);
    ellipse(x, y, w, h);
    x += speed;
    y += velocity;
    if (x > width - w / 2) {
        if (t <= 0 || increasing) {

            speed *= -1.3;
            t++;
            increasing = true;
        }
        if (t >= 14 || !increasing) {
            x=380;
            speed *= -0.75;

            t--;
            increasing = false;
        }
    }

    if (x < 0 + w / 2) {
        if (t <= 0 || increasing) {
            speed *= -1.3;
            t++;
            increasing = true;
        }
        if (t >= 14 || !increasing) {
        
            x = 20;
            speed *= -0.75;
            t--;
            increasing = false;
        }
    }
    if (y > height - h / 2) {
        velocity *= -1;
        speed*=-1.3;
    }
    if (y < 0 + h / 2) {
        velocity *= -1;
        speed*=-1.3;
    }
    if (x >= width - w / 2 || x <= 0 + w / 2 || y >= height - h / 2 || y <= 0 + h / 2) {
        stroke((Math.random() * 51) + 200, (Math.random() * 51) + 200, 0);
        while (endY < height) {
            endX = startX + (Math.random() * 10);
            endY = startY + ((Math.random() * 19) - 9);
            line(startY, startX, endY, endX);
            startX = endX;
            startY = endY;
        }
    } else {
        startX = 0;
        startY = 200;
        endX = 0;
        endY = 200;
    }
}
