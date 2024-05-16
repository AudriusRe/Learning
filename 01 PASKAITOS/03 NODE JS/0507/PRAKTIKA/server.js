import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";

dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "people" })
  .then(() => console.log("PRISIJUNGTA PRIE MONGO DB"))
  .catch(() => console.log("NEPRISIJUNGTA PRIE MONGO DB"));

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`APPSAS LISTENING ON PORT: ${PORT}`))