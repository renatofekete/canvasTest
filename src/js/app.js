const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

// for (var i = 0; i < 5; i++) {
//   let x = Math.floor(Math.random() * window.innerWidth);
//   let y = Math.floor(Math.random() * window.innerHeight);
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   c.fillStyle = `rgb(${r}, ${g}, ${b})`;
//   c.fillRect(x, y, 100, 100);
// }

// for (var i = 0; i < 1000; i++) {
//   let x = Math.floor(Math.random() * window.innerWidth);
//   let y = Math.floor(Math.random() * window.innerHeight);
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   c.beginPath()
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = `rgb(${r}, ${g}, ${b})`;
//   c.stroke();
// }



function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    c.fill();
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

console.log(canvas);


var circleArray = [];

for (var i = 0; i < 100; i++) {
  let radius = 50;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() * -0.5) * 8;
  let dy = (Math.random() * -0.5) * 8;

  circleArray.push(new Circle(x, y, dx, dy, radius))

}





function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);


  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }


}

animate();