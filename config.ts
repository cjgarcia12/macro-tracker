import dotenv from "dotenv-safe";

export default () => {
  dotenv.config();

  return {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/macro-tracker",
  };
};