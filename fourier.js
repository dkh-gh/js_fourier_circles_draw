
class Pendulum {
  constructor(len, spd) {
    this.p_length = len;
    this.p_speed = spd;
    this.p_angle = 0;
  }
  upd() {
    this.p_angle += this.p_speed;
    rotate(radians(this.p_angle));
    stroke(100,100,100);
    strokeWeight(1);
    noFill();
    circle(0,0, this.p_length*2);
    stroke(60, 60, 240);
    fill(60, 60, 240);
    strokeWeight(3);

    line(0,0, 0,-this.p_length);
    translate(0,-this.p_length);
    circle(0,0, 5);
  }
}

//class Points {
//  Points()
//}

