let die;

function setup() {
	createCanvas(600, 800);
	noLoop();
}

function draw() {
	background(0);
    fill(255);
    textSize(46);
    var T=0;
    text("Secret Secret Dice Game", 50, 50);
	for (var i = 50; i < 500; i += 100) {
		for (var j = 125; j < 400; j += 100) {
			die = new Dice(i, j);
			die.show();
            T+=die.roll();
            
		}
	}
    fill(255);
    text("Total: "+T, 50, 500);
    if (T==28) {
        fill(255);
        textSize(28);
        text("It's Vuong's birthday!!", 50, 600);
    }
}

function mousePressed() {
	redraw();
}

class Dice {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	};
	roll() {
		var num = (Math.floor(Math.random() * 6) + 1);
        var total=0;
		console.log(num);
		noStroke();

		if (num == 1) {
			fill(0);
			ellipse(this.x + 50, this.y + 50, 20, 20);
            total++;
		} else if (num == 2) {
			fill(0);
			ellipse(this.x + 25, this.y + 25, 20, 20);
			ellipse(this.x + 75, this.y + 75, 20, 20);
            total+=2;
		} else if (num == 3) {
			fill(0);
			ellipse(this.x + 20, this.y + 20, 20, 20);
			ellipse(this.x + 50, this.y + 50, 20, 20);
			ellipse(this.x + 80, this.y + 80, 20, 20);
            total+=3;
		} else if (num == 4) {
			fill(0);
			ellipse(this.x + 25, this.y + 25, 20, 20);
			ellipse(this.x + 25, this.y + 75, 20, 20);
			ellipse(this.x + 75, this.y + 25, 20, 20);
			ellipse(this.x + 75, this.y + 75, 20, 20);
            total+=4;
		} else if (num == 5) {
			fill(0);
			ellipse(this.x + 25, this.y + 25, 20, 20);
			ellipse(this.x + 25, this.y + 75, 20, 20);
			ellipse(this.x + 75, this.y + 25, 20, 20);
			ellipse(this.x + 75, this.y + 75, 20, 20);
			ellipse(this.x + 50, this.y + 50, 20, 20);
            total+=5;
		} else if (num == 6) {
			fill(0);
			ellipse(this.x + 25, this.y + 25, 20, 20);
			ellipse(this.x + 25, this.y + 50, 20, 20);
			ellipse(this.x + 25, this.y + 75, 20, 20);
			ellipse(this.x + 75, this.y + 25, 20, 20);
			ellipse(this.x + 75, this.y + 50, 20, 20);
			ellipse(this.x + 75, this.y + 75, 20, 20);
            total+=6;
		}
        return total;
	};

	show() {
		fill(255);
		rect(this.x, this.y, 100, 100,20);
	};
    
    
}