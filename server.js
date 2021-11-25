//(>1) solo per provare
console.log("up and running");

//(>2)
let express = require("express");
// stiamo caricando la libraru dentro una variabile
// ora creiamo l'applicazione: praticamante duchiariamo una variabile dentro alla quale express runna
let app = express();
//creiamo poi un port
let port = 3000;
//e alla fine un server containing the running istance of our server
let server = app.listen(port);
//alla fine check (avrei potuto consolloggare qualsiasi cosa, così è piu raffinato e mi checka pure la variabile)
console.log("Server is running on http://localhost:" + port);

//(3>)
//app.use(express.static("nome del file"));
app.use(express.static("public"));