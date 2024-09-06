require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();
const PORT = 3030;

//Middleware Configurations
app.use(express.urlencoded({ extended: false })); //urlencoded,querystring
app.use(express.json()); //application/json->AJAX requests
app.use(cors());
app.use(auth);
app.use(routes);

const uri = "mongodb://127.0.0.1:27017/yosifFIT";
const mongoDBURI = process.env.MONGO_URI || uri;
mongoose
  .connect(mongoDBURI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
