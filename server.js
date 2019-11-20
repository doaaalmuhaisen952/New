'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT =process.env.PORT
const app =express();
app.use(cors());
app.get('/',(Request,Response) => {
    Response.status(202).send('hi')
});