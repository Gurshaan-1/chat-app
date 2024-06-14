const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to database", error.message);
  }
};

module.exports = connectToMongoDB;