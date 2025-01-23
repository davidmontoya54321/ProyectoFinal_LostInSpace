//EVITAR DESPLAZAMIENTO DE LA PAGINA
document.addEventListener("keydown", function (event) {
  // Verifica si es una tecla de flecha
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault(); // Evita el desplazamiento
  }
});

function centerSketch(p) {
  let player = {
    x: 500, // Posición inicial en el escenario grande
    y: 500, // Centrado en 8000x8000
    angle: 0, // Ángulo de la nave
    velX: 0, // Velocidad en X
    velY: 0, // Velocidad en Y
    speed: 0.5, // Aceleración
    friction: 0.98, // Fricción
    maxSpeed: 15, // Velocidad máxima
  };

  let naveImg; // Imagen de la nave
  let escenarioSize = 4000; // Tamaño del escenario
  let canvasSize = 740; // Tamaño del lienzo

  let keys = {
    up: false,
    left: false,
    right: false,
  };

  function preload() {
    scenarioImg = loadImage("Sprites/Escenario2.png");
    naveImg = loadImage("Sprites/Nave.png"); // Cargar la imagen de la nave
  }

  p.setup = function () {
    let canvas = createCanvas(900, canvasSize);
    canvas.parent("center");

    // Crear enemigos iniciales
    for (let i = 0; i < 5; i++) {
      generarEnemigos(); // Llamar al método de generación
    }
    for (let i = 0; i < 5; i++) {
      // Por ejemplo, 5 enemigos
      let enemigoX = random(0, escenarioSize); // Posición aleatoria en el escenario
      let enemigoY = random(0, escenarioSize);
      let velocidad = random(1, 3); // Velocidad aleatoria
      enemigos.push(new Enemigo(enemigoX, enemigoY, velocidad));
    }
  };
  player.draw = function () {
    background(0);

    // Actualizar la posición del jugador
    if (keys.left) player.angle -= radians(5);
    if (keys.right) player.angle += radians(5);
    if (keys.up) {
      player.velX += cos(player.angle) * player.speed;
      player.velY += sin(player.angle) * player.speed;

      // Limitar la velocidad máxima
      let speed = dist(0, 0, player.velX, player.velY);
      if (speed > player.maxSpeed) {
        let scale = player.maxSpeed / speed;
        player.velX *= scale;
        player.velY *= scale;
      }
    }

    // Aplicar fricción
    player.velX *= player.friction;
    player.velY *= player.friction;

    // Actualizar la posición del jugador
    player.x += player.velX;
    player.y += player.velY;

    // Mantener al jugador dentro del escenario
    player.x = constrain(player.x, 0, escenarioSize);
    player.y = constrain(player.y, 0, escenarioSize);

    let camX = constrain(player.x - width / 2, 0, escenarioSize - width);
    let camY = constrain(player.y - height / 2, 0, escenarioSize - height);
    push();

    // Dibujar el escenario relativo al jugador
    push();
    translate(-camX, -camY);

    image(scenarioImg, 0, 0, escenarioSize, escenarioSize);

    // Dibujar el borde del escenario (opcional)
    noFill();
    stroke(255);
    rect(0, 0, escenarioSize, escenarioSize);

    // Dibujar la nave en el centro del lienzo
    translate(player.x, player.y);
    rotate(player.angle);
    imageMode(CENTER);
    image(naveImg, 0, 0, 50, 50); // Escalar la imagen de la nave a 50x50
    pop();
  };

  //Controles: COn botones
  function keyPressed() {
    if (keyCode === UP_ARROW) keys.up = true;
    if (keyCode === LEFT_ARROW) keys.left = true;
    if (keyCode === RIGHT_ARROW) keys.right = true;
  }

  function keyReleased() {
    if (keyCode === UP_ARROW) keys.up = false;
    if (keyCode === LEFT_ARROW) keys.left = false;
    if (keyCode === RIGHT_ARROW) keys.right = false;

    //CONEXIÓN ENEMIGO.JS= Aparecer enemigos en pantalla

    for (let enemigo of enemigos) {
      enemigo.mover(player.x - 50, player.y - 50); // Movimiento hacia el jugador
      enemigo.dibujar(); // Dibujar el enemigo
    }
  }
}
