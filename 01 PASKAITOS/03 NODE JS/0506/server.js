import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js";


dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => console.log("Connected to MONGO DB")).catch(() => console.log("Could not connect"))

const app = express();

app.use(express.json()); //sitas visada eina pries router
app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


