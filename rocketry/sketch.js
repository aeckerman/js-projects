var population;
var rocket;
var lifespan = 200;
var lifeP;
var count = 0;
var target;

function setup() {
	createCanvas(400, 300);
	population = new Population();
	target = createVector(width/2, 50);
	lifeP = createP();
}

function draw() {
	background(0);
	population.run();
	lifeP.html(count);

	count++;
	if(count == lifespan) {
		population.evaluate();
		population.selection();
		//population = new Population();
		count = 0;
	}

	ellipse(target.x, target.y, 16, 16);
}