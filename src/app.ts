import express from "express";
import mongoose from "mongoose";
import config from "../config";

const mongoURI = config().mongoURI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

const port = config().port;
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});