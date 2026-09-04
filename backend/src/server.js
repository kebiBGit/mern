import express from "express";
import notesRoutes from "./routes/nodeRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
// const express = require("express");

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server strated in PORT:", PORT);
});
