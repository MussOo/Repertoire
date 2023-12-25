const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router_repertoire = require("./routers/route_repertoire.js");
const router_authentification = require("./routers/route_authentification.js");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//cors middleware
app.use(function (req, res, next) {
  console.log(req.method, req.url);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// database connection
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/Reportoire", false)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

app.use(router_authentification);
app.use(router_repertoire);
app.listen(8000);
