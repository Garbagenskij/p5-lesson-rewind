let cnv;
//let cake_scale = 0.8;
var button;

let cake;
let cherry;
let blue_icing;
let violet_icing;
let yellow_icing;
let pink_icing;
let sprinkle;

let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

//gli altri da me
function newBroadcast(data) {
  console.log(data);
  fill("green");
  circle(data.x, data.y, 10);
}

function preload() {
  cake = loadImage("./assets/cake.png");
  cherry = loadImage("./assets/cherry.png");
  blue_icing = loadImage("./assets/blue.png");
  violet_icing = loadImage("./assets/violet.png");
  yellow_icing = loadImage("./assets/yellow.png");
  pink_icing = loadImage("./assets/pink.png");
  sprinkle = loadImage("./assets/sprinkle.png");
}
//#049CDB
function setup() {
  cnv = createCanvas(1200, 800);
  centerCanvas();
  background("#049CDB");
  interface();
  // imageMode(CENTER);

  // if (windowWidth > windowHeight) {
  //   cake.resize(0, cake_scale * height);
  // } else {
  //   cake.resize(cake_scale * width, 0);
  // }

  // image(cake, width / 2, height / 2);
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

//io da me
function draw() {
  fill("yellow");
  circle(mouseX, mouseY, 20);
}

//io dagli altri
function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };
  clientSocket.emit("mouse", message);
}

function interface() {
  removeElements();

  //! imageMode(CENTER);
  // if (windowWidth > windowHeight) {
  //   cake.resize(0, cake_scale * height);
  // } else {
  //   cake.resize(cake_scale * width, 0);
  // }
  //!image(cake, width / 2, height / 2);

  button = createImg("sprinkle.png");
  button.position(width / 2, height / 2);
  button.mousePressed(function1);
}
function function1() {
  console.log("Function1 sta funzionando");
}

function windowResized() {
  interface();
  centerCanvas();
}
