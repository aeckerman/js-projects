var tank;
 function preload() {
 	tank = loadImage('tank.png');
 }

var colors = ['#3498db', '#2ecc71', '#f1c40f', '#f1c40f', '#e74c3c'];

var blob;
var blobs = [];
var virus;

var zoom = 1;

function setup() {
	createCanvas(screen.width, screen.height);
	blob = new Blob(random(width), random(height), 15, 5, colors[Math.floor(Math.random()*colors.length)]);
	virus = new Virus(width/2, height/2, 100); 

	var x = random(-width, width);
	var y = random(-height, height);
	for(var i=0; i<100; i++) {
		blobs[i] = new Blob(random(width), random(height), 10, 0, colors[Math.floor(Math.random()*colors.length)]);
	}
}

function draw() {
	background(255, 255, 255);

	translate(width/2, height/2);
	var newzoom = 45 / blob.r;
	zoom = lerp(zoom, newzoom, 0.1)
	scale(zoom);
	translate(-blob.pos.x, -blob.pos.y);

	for(var i=blobs.length-1; i>=0; i--) {
		blobs[i].show();
		if(blob.eat(blobs[i])) {
			blobs.splice(i,1);
		}
	}

	blob.show();
	blob.update();

	virus.show();

	for(var i=0; i<blobs.length; i++) {
		blobs[i].show();
	}
}