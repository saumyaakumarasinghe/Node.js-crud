const express = require("express");                     // Import express framework
const bodyParser = require("body-parser");              // Import body parser middleware

const productRoutes = require("./routes/product");      // Import product routes
const orderRoutes = require("./routes/order");
const userRoutes = require("./routes/user");
const sequelize = require("./util/database");

const app = express();                                  // Create express app     

app.use(bodyParser.json());                             // Parse request data content type application/json

app.use("/api/product", productRoutes);                 // Create product routes
app.use("/api/order", orderRoutes);
app.use("/api/user", userRoutes);


const port = 5001;                                      // Setting up port number

sequelize
.sync()
.then(() => {
    app.listen(port);
    console.log(`Connection has been established successfully in port ${port}`);
})
.catch((err) => {
    console.log(`Unable to connect to the database: `, err);
});