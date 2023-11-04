var canvas = document.getElementById("screenSaver");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log("Hello World");

var templateX = Math.random() * innerWidth;
var templateY = Math.random() * innerHeight;
var templateDX = Math.random() * 10 - 10;
var templateDY = Math.random() * 10 - 10;
var templateRadius = Math.floor(Math.random() * 20) + 20;

//var circle = new Circle(templateX, templateY, templateDX, templateDY, 50);
var circleArray = [];

class Circle {
  constructor(x, y, dx, dy, radius) {
    console.log("In Constructor");
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.colorInitialize();
    //console.log(`${this.x}, ${this.y}. ${this.dx}, ${this.dy}, ${this.radius}`);
  }
  draw() {
    //console.log(this.x + " " + this.y);
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.printColor();
    c.stroke();
    c.fill();
  }

  update() {
    this.colorUpdate();
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
      this.changeColor();
      this.printColor();
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
      this.changeColor();
      this.printColor();
    }
    this.x += this.dx;
    this.y += this.dy;
  }

  changeColor(){ //new color will be what the current color will slowly transition to
    this.newRed = Math.floor(Math.random() * 255);
    this.newGreen = Math.floor(Math.random() * 255);
    this.newBlue = Math.floor(Math.random() * 255);
    this.newAlpha = Math.floor(Math.random() +1);
    this.color = `rgb(${this.curRed}, ${this.curGreen}, ${this.curBlue}, ${this.curAlpha})`;
  }

  printColor(){
    this.color = `rgb(${this.curRed}, ${this.curGreen}, ${this.curBlue}, ${this.curAlpha})`;
    //c.strokeStyle = this.color;
    c.fillStyle = this.color;
  }

  colorUpdate(){
    if(this.curRed < this.newRed){
      this.curRed++;
    } else if(this.curRed > this.newRed){
      this.curRed--;
    }

    if(this.curGreen < this.newGreen){
      this.curGreen++;
    } else if(this.curGreen > this.newGreen){
      this.curGreen--;
    }

    if(this.curBlue < this.newBlue){
      this.curBlue++;
    } else if(this.curBlue > this.newBlue){
      this.curBlue--;
    }

    if(this.curAlpha < this.newAlpha){
      this.curAlpha += this.curAlpha + .1;
    } else if(this.CurAlpha > this.newAlpha){
      this.curAlpha = this.curAlpha - .1;
    }
  }

  colorInitialize(){ //cur color is what the color should be painted currently
    this.curRed = Math.floor(Math.random() * 255);
    this.curGreen = Math.floor(Math.random() * 255);
    this.curBlue = Math.floor(Math.random() * 255);
    this.curAlpha = Math.floor(Math.random() +1);
    this.newRed = Math.floor(Math.random() * 255);
    this.newGreen = Math.floor(Math.random() * 255);
    this.newBlue = Math.floor(Math.random() * 255);
    this.newAlpha = Math.floor(Math.random() +1);

    this.color = `rgb(${this.curRed}, ${this.curGreen}, ${this.curBlue}, ${this.curAlpha})`;
    //c.strokeStyle = this.color;
    c.fillStyle = this.color;
    console.log("Changing Color");
  }
}

for (var i = 0; i <  7; i++) {
  //change this to increase the amount of circles
  templateRadius = Math.floor(Math.random() * 45) + 60;
  templateX = Math.random() * (innerWidth - 2 * templateRadius) + templateRadius;
  templateY = Math.random() * (innerHeight - 2 * templateRadius) + templateRadius;
  templateDX = (Math.random() * 10) - 5;
  templateDY = (Math.random() * 10) - 5;
  
  circleArray.push(
    new Circle(templateX, templateY, templateDX, templateDY, templateRadius)
  ); //contructs a new circle and stores it into the CircleArray
}
console.log(circleArray);
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  //c.beginPath();
  //c.arc(x, y, radius, 0, Math.PI*2, false);
  //c.stroke();
  c.fill();
  for (var j = 0; j < circleArray.length; j++) {
    circleArray[j].draw();
    circleArray[j].update();
  }
}
animate();
