require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes/File");

const app = express();
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.FILE_SHARING_DB_URL);

app.use("/file", router);

app.set("view engine", "ejs");

app.listen(process.env.PORT || 3000);
