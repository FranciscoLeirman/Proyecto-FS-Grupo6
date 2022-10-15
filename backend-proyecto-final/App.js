const express = require("express");
const cors = require("cors");
const db = require("./src/database/db");
const routerUser = require("./src/routes/users");


const app = express();

app.use(cors());
app.use(express.json());
app.use(routerUser);


const PORT = 4000;

app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});

module.exports = app;
