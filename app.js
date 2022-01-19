const express = require('express');
const app = express();
const port = 3200;
const db = require('./config/db')
const userRoutes = require('./routes/users.routes');
const productRoutes = require('./routes/products.routes');


db.connect();
console.log("conectado a bd");

//Middlewares
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);


app.listen(port, () => {
    console.log("Iniciado en port 3200");
});
