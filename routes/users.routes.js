const Users = require('../models/user');
const express = require('express');
const user = require('../models/user');
const router = express.Router();

router.get('/getUsers', async (req, res) => {
    try {
        const users = await Users.find();
        res.send(users);
    } catch (error) {
        console.log(error);
    }
});

router.post('/login', async (req, res) => {
    const query = {
        rut: req.body.rut,
        password: req.body.password
    };

    try {
        const user = await Users.find(query);
        res.send(user);
    } catch (error) {
        console.log(error);
    }

});

router.post('/createUser', async (req, res) => {
    console.log(req.body);
    //Pasar datos para el nuevo usuario
    var newUser = Users({
        rut: req.body.rut,
        name: req.body.name,
        lastName: req.body.lastName,
        user: req.body.user,
        password: req.body.password,
        phone: req.body.phone,
        birthday: req.body.birthday,
        address: req.body.address,
        genre: req.body.genre
    });

    //Guardar
    try {
        await newUser.save();
        res.send(newUser);
    } catch (error) {
        console.log(error);
    }
});

router.get('/getUserByRut:rut', async (req, res) => {
    try {
        const user = await Users.find({ rut: req.params.rut });
        res.send(user);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;