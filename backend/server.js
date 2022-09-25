require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cart = require("./routes/cart");

//middleware
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(express.json());

app.use("/api/v1", cart);

//connect to db
mongoose
  .connect(process.env.MONGO_DB, () => {
    app.listen(process.env.PORT, () => {
      console.log("Server is listening to port", process.env.PORT);
    });
  })
  .catch((err) => handleError(err));
