const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: 'string',
    },
    image:{
        type: 'string',
    },
    price:{
        type: 'string',
    }
})

const product = mongoose.model('Product', productSchema);

module.exports = product;