import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
// const express = require("express");

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json()); //this middleware will parse the JSON bodies: req.body
app.use(rateLimiter);

// Simple middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server strated in PORT:", PORT);
  });
});
