require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: [process.env.PROD_ADDRESS, process.env.DEV_ADDRESS],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "x-Authorization", "X-Requested-With"],
  })
);

app.use(routes);

const mongoDBURI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/yosifFIT";

mongoose
  .connect(mongoDBURI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
