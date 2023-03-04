//Configuracion de express para iniciar el servidor :D
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productosRoutes = require('./routes/productos.route');
//Configuracion del puerto y la URI de la BD
const port = 5000;
const URI = "mongodb+srv://MiguelManzanilla:Yahirtontin18@cluster0.dqyo5fr.mongodb.net/LuckyCondoms?retryWrites=true&w=majority"


app.get('/', (req, res) => {
    res.send("Hola Maeta 😬")
}) 

app.use(express.json())

mongoose.set("strictQuery", false)

mongoose.connect(URI)
    .then(console.log('Base de Datos Conectada :D'))
    .catch((Error) => console.log(Error))
    

app.use("/productos", productosRoutes)

app.listen(port, () => {
    console.log('listening on port', port);
}) 