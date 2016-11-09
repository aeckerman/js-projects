function Virus(x, y, r) {
	this.pos = createVector(x, y);
	this.r = r;

	this.infect = function(other) {
		other.r -= (other.r/2);
	}

	this.show = function() {
		fill('#e74c3c');
		stroke('#c0392b');
		strokeWeight(5)
		ellipse(this.pos.x, this.pos.y, this.r);
	}
}