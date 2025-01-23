class Enemigo {
  constructor(x, y, velocidad) {
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.tamano = 50;
    this.angle = random(0, TWO_PI); // Ángulo inicial aleatorio
    this.giroVelocidad = 0.05; // Velocidad de giro del enemigo
    this.img = loadImage("Sprites/Enemigo1.png"); // Imagen del enemigo
  }

  // Dibujar el enemigo
  dibujar() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.tamano, this.tamano);
  }

  // Movimiento básico del enemigo
  mover(jugadorX, jugadorY) {
    // Calcular el ángulo hacia el jugador
    let anguloObjetivo = atan2(jugadorY - this.y, jugadorX - this.x);
    console.log("Ángulo objetivo:", anguloObjetivo); // Diagnóstico
    // Ajustar suavemente el ángulo del enemigo hacia el objetivo
    let diferencia = anguloObjetivo - this.angle;
    if (diferencia > PI) diferencia -= TWO_PI;
    if (diferencia < -PI) diferencia += TWO_PI;
    this.angle += constrain(
      diferencia,
      -this.giroVelocidad,
      this.giroVelocidad
    );
    // Movimiento directo hacia el jugador

    this.x += cos(this.angle) * this.velocidad;
    this.y += sin(this.angle) * this.velocidad;

    // Mantener al enemigo dentro de los límites del escenario
    this.x = constrain(this.x, 0, escenarioSize);
    this.y = constrain(this.y, 0, escenarioSize);
  }

  // Dibujar el enemigo
  dibujar() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.tamano, this.tamano);
    pop();
  }
}

if (this.y < 0) this.y = 0;
if (this.x > escenarioSize) this.x = escenarioSize;
if (this.y > escenarioSize) this.y = escenarioSize;

let enemigos = []; // Array global para los enemigos

function generarEnemigos() {
  let xInicial = player.x + random(-800, 800); // Generar cerca del jugador
  let yInicial = player.y + random(-800, 800);
  enemigos.push(new Enemigo(xInicial, yInicial, 2));
}
/*function setup() {
  let canvas = createCanvas(900, canvasSize);
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);

  // Generar un enemigo inicial fuera del centro visible
  enemigos.push(new Enemigo(50, 50, 15)); // Posición y velocidad
}*/

// Lógica adicional para la nave y el escenario...
