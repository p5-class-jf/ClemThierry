// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 50,
    seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 300, 1)
gui.add(params, "seed", 0, 50, 1)
gui.add(params, "Download_Image")



// -------------------
//       Drawing
// -------------------

function draw() {
    let boolean=true;
    let x,y=random(30,height-30);
    background(255,255,255);
    randomSeed(params.seed);
    fill(0,0,0,0)
    stroke(0);
    strokeWeight(1);
    beginShape();
    for (let index = 0; index < params.N; index++) {
        if (boolean==true) {
            x=random(30,width-30);
        }else{
            y=random(30,height-30);
        }
        vertex(x,y);
        boolean=!boolean;       
    }
    endShape();

}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}
