// Clase para las burbujas
class Particula {
  constructor(x, y) {
    this.posx = x;
    this.posy = y;
    this.vel = createVector(random(-2, 2), random(1, -9)); // Movimiento hacia arriba y algo lateral
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
