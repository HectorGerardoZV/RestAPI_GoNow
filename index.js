import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes.js"
import cors from "cors";


//Server Creation
const app = express();

//Enable cors
app.use(cors());

//Data Base connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/gonow",{})

//Enable the encode Json requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Router asignation
app.use("/",router);

//Seting the start port
app.listen(4000,()=>{
    console.log("Server runing - port: "+4000);
})

