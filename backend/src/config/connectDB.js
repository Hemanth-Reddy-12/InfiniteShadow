const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connection succesfully");
  } catch (error) {
    console.log("error when try to connect database" + error);
  }
};

module.exports = connectDB;
