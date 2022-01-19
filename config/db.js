const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

module.exports = class DB {
    static connect() {
        try {
            return mongoose.connect(process.env.MONGO_DB, {
                promiseLibrary: global.Promise,
                useNewUrlParser: true
            });
        } catch (error) {
            console.log("Error al conectar a la base de datos");
        }
    };


};