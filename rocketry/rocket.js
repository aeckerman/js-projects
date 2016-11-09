function Rocket(dna) {
	this.pos = createVector(width/2, height);
	this.vel = createVector();
	this.acc = createVector();
	if(dna) {
		this.dna = dna;
	} else {
		this.dna = new DNA();
	}
	this.fitness = 0;
	this.completed = false;

	this.applyForce = function(force) {
		this.acc.add(force)
	}

	this.calcFitness = function() {
		var d = dist(this.pos.x, this.pos.y, target.x, target.y);
		this.fitness = map(d, 0, width, width, 0);
	}

	this.targetCheck = function() {
		var d = dist(this.pos.x, this.pos.y, target.x, target.y);
		if(d <= 0) {
			fill(random(255), 100);
		}
	}

	this.update = function() {
		var d = dist(this.pos.x, this.pos.y, target.x, target.y);
		if(d <= 10) {
			this.completed = true;
		}
		this.applyForce(this.dna.genes[count]);
		this.count++;
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.show = function() {
		push();
		translate(this.pos.x, this.pos.y);
		rotate(this.vel.heading());
		rectMode(CENTER);
		fill(255, 100)
		noStroke();
		rect(0, 0, 25, 5);
		pop();
	}
}