import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import router from "./routes/index.js";


dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "bookStore" })
  .then(() => console.log("CONNECTED TO MONGO DB"))
  .catch(() => console.log("COULD NOT CONNECT TO MONGO DB"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`APP LISTENING ON PORT: ${PORT}`))