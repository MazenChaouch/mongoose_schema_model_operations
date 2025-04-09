const mongoose = require("mongoose");

const uri =
  "mongodb+srv://mchaouch007:mchaouch007@cluster0.qdtbh.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0";

const connectToDb = () => {
  mongoose
    .connect(uri)
    .then(console.log("connected"))
    .catch((err) => console.log(err.message));
};

module.exports = connectToDb;
