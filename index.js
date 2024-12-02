import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/firstZeldadatabase")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB", error));

const itemSchema = new mongoose.Schema({
    name: String,
    releaseDate: Number, 
    console: Number,
});