var axiom = "F";
var s = axiom; 
var len = 100;

rule = {
	a: "F",
	b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate() {
	len *= 0.5;
	var ns = "";
	for(var i=0; i<s.length; i++) {
		var current = s.charAt(i);
		if(current == rule.a) {
			ns += rule.b;
		} else {
			ns += current;
		}
	}
	s = ns;
	//createP(s);
	turtle();
}

function turtle() {
	background(51);
	resetMatrix();
	translate(width/2, height);
	stroke(255, 100);
	for(var i=0; i<s.length; i++) {
		var current = s.charAt(i);
		if(current == "F") {
			line(0, 0, 0, -len);
			translate(0, -len);
		} else if(current == "+") {
			rotate(PI/6);
		} else if(current == "-") {
			rotate(-PI/6);
		} else if(current == "[") {
			push();
		} else if(current == "]") {
			pop();
		}
	}
}

function setup() {
	createCanvas(400, 400);
	//createP(axiom);
	turtle();
	var b = createButton("Generate");
	b.mousePressed(generate);
}

function draw() {
	background(51);
	turtle();
}