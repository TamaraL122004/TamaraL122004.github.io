let particulas = [];

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  // let myCanvas = createCanvas(400, 600);
  myCanvas.parent("my-p5-sketch");
  noStroke();
}

function draw() {
  background(0, 90);

  for (let i = 0; i < 5; i++) {
    let nuevaParticula = new Particula(mouseX, mouseY);
    particulas.push(nuevaParticula);
  }

  // Actualizar y mostrar las burbujas
  for (let i = particulas.length - 1; i >= 0; i--) {
    particulas[i].update();
    particulas[i].display();

    // Eliminar partículas que ya no son visibles
    if (particulas[i].transparencia <= 0) {
      particulas.splice(i, 1);
    }
  }
}

// Clase para las burbujas
class Particula {
  constructor(x, y) {
    this.posx = x;
    this.posy = y;
    this.vel = createVector(random(-4, 4), random(-4, 4)); // Movimiento hacia arriba y algo lateral
    this.tamano = random(30, 50); // Tamaño al azar
    this.transparencia = 250; // Comienza totalmente opaca
    this.color = [128, 0, random(255, 0), 0]; // Colores
  }

  // Actualizar la partícula
  update() {
    this.posx += this.vel.x; // Mover en el eje x
    this.posy += this.vel.y; // Mover en el eje y (hacia arriba)
    this.transparencia -= 5; // Reducir la transparencia gradualmente
    this.tamano *= 0.95; // Reducir el tamaño lentamente para dar el efecto de desvanecimiento
  }

  // Mostrar la partícula
  display() {
    stroke(250);
    fill(this.color[0], this.color[1], this.color[2], this.transparencia); // Usar color con transparencia
    ellipse(this.posx, this.posy, this.tamano); // Dibujar la partícula como un círculo
  }
}
