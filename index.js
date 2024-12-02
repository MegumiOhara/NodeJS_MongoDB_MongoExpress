import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/firstZeldadatabase")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB", err));

 //Define a schema and a model.    
const itemSchema = new mongoose.Schema({
    name: String,
    release: Number, 
    console: String,
});

const Item = mongoose.model("Item", itemSchema);

//Fetch data 
app.get("/items", async(req,res) => {
    try {
        const newItem = new Item(req.body);
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({
            error: "Failed to get items",
        });
    }
});

//Add data 
app.post("/items", async(req,res)=>{
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.json(newItem);
    } catch (error) {
        res.status(500).json({
            error: "Failed to post items",
        });
    }
});

//start server 
app.listen(3000,() => console.log("Server is running at http://localhost:3000"));