let cnv;

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
  // cherry = loadImage("./assets/cherry.jpg");
  // blue_icing = loadImage("./assets/blue.jpg");
  // violet_icing = loadImage("./assets/violet.jpg");
  // yellow_icing = loadImage("./assets/yellow.jpg");
  // pink_icing = loadImage("./assets/pink.jpg");
  // sprinkle = loadImage("./assets/sprinkle.jpg");
}
//#049CDB
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background("orange");
  imageMode(CENTER);
  cake.resize(0.5 * width, 0);
  image(cake, width / 2, height / 2);
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
