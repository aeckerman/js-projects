function Leaf(x, y, r, c) {
	this.pos = createVector(x, y);
	this.r = r;
	this.c = c;

	this.show = function() {
		fill(255, 0, 100, 100);
		noStroke();
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
	}
}