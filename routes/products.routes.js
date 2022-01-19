const Products = require('../models/product');
const express = require('express');
const user = require('../models/user');
const router = express.Router();

router.get('/getProducts', async (req, res) => {
    try {
        const users = await Products.find();
        res.send(users);
    } catch (error) {
        console.log(error);
    }
});

router.post('/createProduct', async (req, res) => {
    console.log(req.body);
    //Pasar datos para el nuevo producto
    var newProduct = Products({
        sku: req.body.sku,
        name: req.body.name,
        distributor: req.body.distributor,
        elaborationDate: req.body.elaborationDate,
        expirationDate: req.body.expirationDate,
        quantity: req.body.quantity,
        createdAt: Date.now(),
        price: req.body.price
    });

    //Guardar
    try {
        await newProduct.save();
        res.send({ "ok": newProduct });
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;