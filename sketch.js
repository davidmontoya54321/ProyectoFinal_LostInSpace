//Deteción de manos
let video;
let handPose;
let hands = [];
let brain;

//Carga el modelo de detección de manos
function preload() {
  handPose = ml5.handPose({ flipped: true });
}

function mousePressed() {
  console.log(hands);
}
function gotHands(results) {
  hands = results;
}
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();

  //detectar las poses desde el video
  handPose.detectStart(video, gotHands);

  brain = ml5.handPose();
}

function draw() {
  image(video, 0, 0);
  if (hands.length > 0) {
    for (let hand of hands) {
      if (hand.confidence > 0.1) {
        for (let i = 0; i < hand.keypoints.length; i++) {
          let keypoint = hand.keypoints[i];
          if (hand.handedness == "Left") {
            fill(0, 0, 255);
          } else {
            fill(255, 0, 255);
          }

          circle(keypoint.x, keypoint.y, 12);
        }
      }
    }
  }
}
