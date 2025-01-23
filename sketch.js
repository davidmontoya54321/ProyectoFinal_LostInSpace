//Deteción de manos
let video;
let handPose;
let hands = [];
let skeleton;
let hand;

let brain;
let poseLabel;

let state = "waiting";
let targetLAbel;
/////////////////////////////////////////////////////////
function keyPressed() {
  if (key == "s") {
    brain.saveData();
  } else {
    targetLAbel = key;
    console.log(targetLAbel);

    setTimeout(function () {
      console.log("collecting");
      state = "collecting";
      setTimeout(function () {
        console.log("not collecting");

        state = "waiting";
      }, 1000);
    }, 1000);
  }
}
///////////////////////////////////////////////////////
//Carga el modelo de detección de manos
function preload() {
  handpose = ml5.handPose({ flipped: true });
}

function mousePressed() {
  console.log(hands);
}

////////////////////////////////////////////////////
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  handpose = ml5.handPose(video, modelLoaded);
  handpose.on("predict", gotHands);

  function modelLoaded() {
    console.log("Handpose model ready");
  }

  //detectar las poses desde el video
  //handPose.detectStart(video, gotHands);

  let options = {
    input: 40,
    ouputs: 6,
    task: "classification",
    debug: true,
  };

  brain = ml5.neuralNetwork(options);
}
///////////////////////////////////////////////////////
function gotHands(hands) {
  hands = results;

  if (hands.length > 0) {
    hand = hands[0];
    skeleton = hands[0].skeleton;

    if (state == "collecting") {
      let inputs = [];
      if (hand.keypoints && hand.keypoints.length > 0) {
        for (let i = 0; i < hand.keypoints.length; i++) {
          let x = hand.keypoints[i].position.x;
          let y = hand.keypoints[i].position.y;
          inputs.push(x);
          inputs.push(y);
        }
        let target = [targetLabel];
        brain.addData(inputs, target);
      }
    }
  }

  //////////////////////////////////////////////////////
  function modelLoaded() {
    console.log("poseNet ready");
  }
  //////////////////////////////////////////////////////
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
}
