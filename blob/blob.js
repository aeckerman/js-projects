function Blob(x, y, r, s, c) {
	this.pos = createVector(x, y);
	this.r = r;
	this.s = s;
	this.vel = createVector(0,0);
	this.c = c;

	this.update = function() {
		var newvel = createVector(mouseX-width/2, mouseY-height/2);
		newvel.setMag(10);
		this.vel.lerp(newvel, 0.2);
		this.pos.add(this.vel);
		//rotate((this.pos.x, this.pos.y));
	}

	this.eat = function(other) {
		var d = p5.Vector.dist(this.pos, other.pos);
		if(d < this.r + other.r) {
			var sum = PI * this.r * this.r + PI * other.r * other.r;
			this.r = sqrt(sum / PI);
			return true;
		} else {
			return false;
		}
	}

	this.show = function() {
		strokeWeight(this.s);
		stroke(0);
		//image(tank, this.pos.x, this.pos.y, this.r*2, this.r*2)
		fill(this.c);
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
	}
}