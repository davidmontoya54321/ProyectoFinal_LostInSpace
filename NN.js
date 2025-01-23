/*//NEURAL NETWORK MACHINE: PARA EL RECONOCIMIENTO DE LA ACCIONES HECHAS CON
//LAS MANOS

let model;
let targetLabel = "C";
//let trainingData = []
let state = "collection";
let notes = {
  C: 261.6256,
  D: 293.6648,
  E: 329.6276,
  F: 349.2282,
  G: 391.9954,
  A: 440.0,
  B: 493.8833,
};
let env, wave;

function setup() {
  createCanvas(400, 400);

  env = new p5.Envelope();
  env.setADSR(0.05, 0.1, 0.5, 1);
  env.setRange(1.2, 0);

  wave = new p5.Oscillator();

  wave.setType("sine");
  wave.start();
  wave.freq(440);
  wave.amp(env);

  let options = {
    inputs: ["x", "y"],
    outputs: ["frequency"],
    task: "regression",
    debug: "true",
  };

  //Datos para cargar el MODELO y DATOS
  model = ml5.neuralNetwork(options);
  /*model.loadData("mouseTouch(1).json", dataLoaded);
  const modelInfo = {
    model: "MODELO/model.json",
    metadata: "MODELO/model_meta.json",
    weights: "MODELO/model.weights.bin",
  };
  model.load(modelInfo, modelLoaded);
  background(255);
}

function modelLoaded() {
  console.log("model loaded");
  state = "prediction";
}
//Tener los datos cargados

function dataLoaded() {
  console.log(model.data);
  let data = model.data.data.raw;

  for (let i = 0; i < data.length; i++) {
    let inputs = data[i].xs;
    let target = data[i].ys;
    stroke(0);
    noFill();
    ellipse(inputs.x, inputs.y, 24);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(target.label, inputs.x, inputs.y);
  }
  // state = "training";
  //console.log("start training");
  // model.normalizeData();
  // let options = {
  //   epochs: 200,
  // };
  //model.train(options, whileTraining, finishedTraining);
}

//Acción para empezar a entrenar,

function keyPressed() {
  if (key == "t") {
    state = "training";
    console.log("starting training");
    model.normalizeData();
    let options = {
      epochs: 50,
    };
    model.train(options, whileTraining, finishedTraining);
    //guardar los DATOS
  } else if (key == "s") {
    model.saveData("mouseTouch");
    //guardar el MODELO
  } else if (key == "m") {
    model.save("mouseTouchs");
  } else {
    targetLabel = key.toUpperCase();
  }
}

//Muestra el digrama de aprendizaje del
function whileTraining(epoch, loss) {
  console.log(epoch);
}
function finishedTraining() {
  console.log("finishedTraining");
  state = "prediction";
}

function mousePressed() {
  let inputs = {
    x: mouseX,
    y: mouseY,
  };

  if (state == "collection") {
    let targetFrequency = notes[targetLabel];
    let target = { frequency: targetFrequency };

    model.addData(inputs, target);

    stroke(0);
    noFill();
    ellipse(mouseX, mouseY, 24);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(targetLabel, mouseX, mouseY);
    wave.freq(targetFrequency);
    env.play();
  } else if (state == "prediction") {
    model.predict(inputs, gotResults);
  }
}

//Acciones y resultados después del entrenamiento
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);
  stroke(0);
  fill(0, 0, 255, 100);
  ellipse(mouseX, mouseY, 24);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(floor(results[0].value), mouseX, mouseY);
  wave.freq(results[0].value);
  env.play();
}
*/
