var tree = [];
var count = 0;
var leaves = [];

function setup() {
	createCanvas(400, 400);
	var a = createVector(width/2, height);
	var b = createVector(width/2, height - 100);
	var root = new Branch(a, b);
	tree[0] = root;
}

function mousePressed() {
	for (var i=tree.length-1; i>=0; i--) {
		if(!tree[i].finished) {
			tree.push(tree[i].branch(PI/6));
			tree.push(tree[i].branch(-PI/4));
			tree[i].finished = true
		}
	}
	count++;

	if(count === 6) {
		for(var i=0; i<tree.length; i++) {
			if(!tree[i].finished) {
				var leaf = tree[i].end.copy();
				leaves.push(leaf);
			}
		}
	}
}

function draw() {
	background(51);

	for(var i=0; i < tree.length; i++) {
		tree[i].show();
		//tree[i].jitter();
	}

	for(var i=0; i < leaves.length; i++) {
		fill(255, 0, 100, 100);
		noStroke(0)
		ellipse(leaves[i].x, leaves[i].y, 8, 8);
		//tree[i].jitter();
	}
}