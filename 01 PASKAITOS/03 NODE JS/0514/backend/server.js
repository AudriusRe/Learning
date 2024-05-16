import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import router from "./routes/index.js";


dotenv.config();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "office" })
  .then(() => console.log("Connected to Mongo DB"))
  .catch(() => console.log("Could not connect to Mongo DB"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`))