const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectingDB = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database is connected successfully",
      connectingDB.connection.host,
      connectingDB.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
