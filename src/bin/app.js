require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const server = require('http').Server(app);

require('../configs/app')(app);
require('../configs/db/db')(mongoose);

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Application start on port ${port}!`));
