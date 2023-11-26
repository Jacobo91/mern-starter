import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Replace with the actual origin of your frontend application
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Adjust to the HTTP methods you need
    credentials: true, // If you need to send credentials with the request
}));

mongoose
.connect(process.env.mongoDBURL)
.then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })