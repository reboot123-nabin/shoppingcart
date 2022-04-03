const express=require('express');

const app=express();

const cart_route=require('./routes/cart_routes');
const bodyParser =require('body-parser');//core module
const path=require('path');
const cors=require('cors');
const connectDB = require("./db/db");



//connect databse
connectDB();
app.use(cart_route);
app.use(express.json());
app.use(cors());
app.use('/',express.static(path.join(__dirname, 'files')))
app.use(bodyParser.urlencoded({extended:false}));

app.listen(90);

