// Akshita Addepalli and Aryan Patel
//ADD names of group members at top of sketch 
//Please have each group member DUPLICATE THIS SKETCH and have it saved in your accounts
//Everyone will be submitting their versions individually 
//There are ~24 bugs + version control 
//please add a comment to what was fixed or adjusted for each one. Note that you may need to delete stuff. 
let nyan;
let noNyan;
// nyanBg // Bug 1: Unused variable nyanBg, which was declared incorrectly
let variable; 
let circles = [];


let colors = [
 [255, 0, 0],     // red 
  [255, 165, 0],   // orange 
  [255, 255, 0],   // yellow
  [0, 255, 0],     // green
  [0, 0, 255],     // blue
  [148, 0, 211],   // purple
  [150, 150, 150], // grey 
  [100, 100, 100], // darker grey 
  [255, 182, 193], // pink 
  [255, 105, 180], // hot pink  bug 2: (second number missing)
  [255, 228, 181], // beige 
  [0, 0, 0],       // black 
  [255, 255, 255]  // white 
];

let playbackRate = 1.0;

async function setup() {
  createCanvas(400, 400);
  nyan = await loadSound('medias/nyanCat.mp3'); // Bug 4: folder path was incorrect
  noNyan = await loadImage('medias/nyancatless.gif') // Bug 5: folder path was incorrect
  //sprinkles = await loadImage('sprinkles.jpg'); // Bug 6: Image does not exist
}

function draw() {
  background(noNyan); // Bug: Move background change into draw
  
  // Draw all circles
  for (let circle of circles) { // Bug 7: Circles mispelling
    fill(circle.color); // Bug: says colors instead of color
    ellipse(circle.x, circle.y, 50, 50); // Bug 14: elipse instead of ellipse
  }
  

  if (mouseIsPressed) {
    let c = random(colors); 
    let newCircle = { // Bug 3: said new Circle instead of newCircle
      x: mouseX, // Bug 9: mouse was capitalized
      y: mouseY,
      color: color(c[0], c[1], c[2]) // Bug 10: Says colors instead of color and (0) should be [0]
    };
    circles.push(newCircle);
  }
}

function mousePressed() {
  let c = random(colors); // Bug: says colors instead of color
  let newCircle = {
    x: mouseX,
    y: mouseY,
    color: color(c[0], c[1], c[2])
  };
  circles.push(newCircle);
  nyan.setVolume(0.5); // Bug 11: says nayn instead of nyan
  nyan.rate(playbackRate); // Bug 12: playbak instead of playback
  nyan.loop();
}

function mouseReleased(){
  nyan.stop();

} // Bug 13: Missing closing bracket

function keyPressed() {
  // Bug: says == instead of ===
  // Bug: says keycode instead of keyCode
  // Bug: Got rid of random semicolon
  if (keyCode === UP_ARROW) { // Bug 15: keycode instead of keyCode
    playbackRate += 0.1; 
    nyan.rate(playbackRate); 
  } else if (keyCode === DOWN_ARROW) { // Bug: Missing if in else if
    //Bug: down_arrow instead of DOWN_ARROW
    // Bug: says == instead of ===
    playbackRate = max(0.1, playbackRate - 0.2); 
    nyan.rate(playbackRate);
  } else if (keyCode === LEFT_ARROW) { 
    playbackRate = playbackRate * 1; 
    // Bug: says playBackRate instead of playbackRate
    nyan.rate(playbackRate); 
  }
}
// Bug: Unnecessary closing brackets