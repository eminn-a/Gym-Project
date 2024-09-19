require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();
const PORT = process.env.PORT || 3030;

const corsOrigin =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_ADDRESS
    : process.env.PROD_ADDRESS || "http://localhost:5173";

console.log(corsOrigin);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);
app.use(auth);
app.use(routes);

const mongoDBURI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/yosifFIT";
mongoose
  .connect(mongoDBURI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
