float x=20;
float y;
float w=40;
float h=40;
float speed=3;
float velocity=(float)(Math.random()*2)+1;
int startX=0;
int startY=200;
int endX=0;
int endY=200;
int t=0;
boolean increasing = true;

void setup() {
  size(400, 400);
  strokeWeight(5);
  y=height/2;
}

void draw() {
  lightning();
}

void lightning() {
  background(0);
  fill(230, 230, 0);
  ellipse(x, y, w, h);
  
  x+=speed;
  y+=velocity;
  if (x>width-w/2) {
    if (t<=0 || increasing) {
      speed*=-1.3;
      t++;
      increasing=true;
    }
    if (t>=14 || !increasing) {
      println(t);
      x=380;
      speed*=-.75;
      t--;
      increasing=false;
    }
  }  

  if (x<0+w/2) {
    if (t<=0 || increasing) {
      speed*=-1.3;
      t++;
      increasing=true;
    }
    if (t>=14 || !increasing) {
      println(t);
      x=20;
      speed*=-0.75;
      t--;
      increasing=false;
    }
  }
  if (y>height-h/2) {
    velocity*=-1;
     speed*=-1.3;
  }
  if (y<0+h/2) {
    velocity*=-1;
     speed*=-1.3;
  }
  if (x>=width-w/2 || x<=0+w/2 || y>=height-h/2 || y<=0+h/2) {
    stroke((int)(Math.random()*51)+200, (int)(Math.random()*51)+200, 0);
    while (endY<height) {
      endX=startX+(int)(Math.random()*10);
      endY=startY+(int)((Math.random()*19)-9);
      line(startY, startX, endY, endX);
      startX=endX;
      startY=endY;
    }
  } else {
    startX=0;
    startY=200;
    endX=0;
    endY=200;
  }
}
