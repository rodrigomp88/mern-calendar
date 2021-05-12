const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");

//Crear el servior express
const app = express();

//Base de datos
dbConnection();

//Cors
app.use(cors());

//Directorio publio
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
});
