const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    sku: String,
    name: String,
    distributor: String,
    elaborationDate: String,
    expirationDate: String,
    quantity: String,
    createdAt: Date,
    price: String
});

module.exports = mongoose.model('products', productSchema);