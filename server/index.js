const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const noteRoutes = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(cors());

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

app.use("/routes", noteRoutes);

app.listen(3001, () => {
  console.log("server running on 3001....");
});
