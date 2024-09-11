const express =require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app  = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true, limit: "20Kb"}))
app.use(express.static("public"))
app.use(cookieParser())

module.exports = app;
