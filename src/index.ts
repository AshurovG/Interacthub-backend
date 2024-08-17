import express from "express";
const cors = require("cors");
const bodyParser = require("body-parser");

const usersRouter = require("./users/users.routes");
const postsRouter = require("./posts/posts.routes");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", usersRouter);
app.use("/api", postsRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
