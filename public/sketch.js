//(5>) aggiungo questo blocco
let clientSocket = io();
clientSocket.on("connect", newConnection);
function newConnection() {
  console.log(clientSocket.id);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //(>4) per vedere che faccia qualcosa aggiungo questo
  //set up e draw vengono fuori in automatico, standard come in ogni p5 project
  circle(mouseX, mouseY, 20);
}
