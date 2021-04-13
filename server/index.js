const express = require("express");
const mongoose = require("mongoose");

const noteRoutes = require("./routes/routes");

const app = express();

const url =
  "mongodb+srv://Luffyguy:harshh123@luffyguy.urqs4.mongodb.net/note?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected to db");
});

app.use(express.json());

app.use("/routes", noteRoutes);

app.listen(5000, () => {
  console.log("server running on 5000....");
});
