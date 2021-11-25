//(5>) aggiungo questo blocco
let clientSocket = io();
clientSocket.on("connect", newConnection);
//(9>)
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}
//(9>)
//ora faccio un'ultima funzione : quando ricevi il messaggio fai...
//data è il nome che attribuisco degli incoming data
function newBroadcast(data) {
  console.log(data);
  //(>10)
  fill("red");
  circle(data.x, data.y, 10);
}

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  //background(220);
  //(>4) per vedere che faccia qualcosa aggiungo questo
  //set up e draw vengono fuori in automatico, standard come in ogni p5 project

  //(>10 BIS)
  fill("yellow");
  circle(mouseX, mouseY, 20);
}

//(>6)
function mouseMoved() {
  //funziona come una mail: stiamo mandando un messaggio
  //questo è il messaggio che scriviamo
  let message = {
    x: mouseX,
    y: mouseY,
  };
  //ora la inviamo. Praticamnte .emit è l'email service che uso (es. gmail),
  //"mouse" è l'oggetto, mentre messagge è appunto il corpo della mail, come specificato sopra (l'ho semplicemnte buttato in una variabile)
  clientSocket.emit("mouse", message);
}
