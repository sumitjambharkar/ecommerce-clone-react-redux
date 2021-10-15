const express = require('express');
const mongoose = require('mongoose');
const Product = require('./model/Products')

mongoose.connect('mongodb+srv://sumit:Sumitjambharkar@cluster0.tseta.mongodb.net/sundaymern?retryWrites=true&w=majority',{
    useNewUrlParser: true ,
    useUnifiedTopology: true

})

const app = express();

const Port = 3001

app.get('/product',(req, res)=>{
    Product.find().then((resdata)=>res.json(resdata))

});

app.listen(Port,(req,res)=>{
    console.log(`http://localhost:${Port}`);
})