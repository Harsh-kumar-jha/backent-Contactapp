const express = require("express");
const errorHandler = require("./middlewares/errorHandlers");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
