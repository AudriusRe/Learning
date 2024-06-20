import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router.js"

dotenv.config();

const { URL, PORT } = process.env;

mongoose
  .connect(URL)
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Failed to connect to DB"));


  const app = express();

  app.use(cors())
  app.use(express.json())

  app.use(router)

  app.listen(PORT, () => console.log(`app listening on ${PORT}`))