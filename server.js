import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
<<<<<<< HEAD
import path from "path";
import { fileURLToPath } from "url";
=======

import path from "path";

import {fileURLToPath} from 'url';

>>>>>>> 8f29d26b176ee5b5f6e4c2ff59f6f890857e0095
const app = express();

//env
dotenv.config();

//database
connectDB();

//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//deploy
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "./client/build")));
=======
app.use(express.static(path.join(__dirname,'./client/build')))

>>>>>>> 8f29d26b176ee5b5f6e4c2ff59f6f890857e0095
//routes
app.use("/api/v1/auth", authRoutes);

//rest api
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to ecommerce app</h1>");
// });

//deploy
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//deploy
// app.use("*", function (req, res) {
//   res.sendFile(path.join(__dirname, ""));
// });
//port
const PORT = process.env.PORT || 8080;

//run liste
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
