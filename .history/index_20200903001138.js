const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const RoutersUser = require('./domain/users/users.routes.config');

RoutersUser.routesConfig(app);

app.listen(8080, () => {
    console.log("Servidor iniciou na porta 8080");
});