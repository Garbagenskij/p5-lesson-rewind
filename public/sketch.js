let cnv;
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

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("red");
  //#049CDB
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
