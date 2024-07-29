import express from "express";
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// const productsRouter = require('./products/products.routes')

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// app.use('/api', productsRouter)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
