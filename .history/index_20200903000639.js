const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.json());