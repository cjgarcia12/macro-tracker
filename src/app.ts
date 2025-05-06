import express from "express";
import mongoose from "mongoose";
import config from "../config";
import apiRoutes from './routes'

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

app.use('api/', apiRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});