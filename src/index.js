//require("dotenv").config({ path: "/" });
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
import { connect } from "http2";
import connectDB from "./db/index.js";
import { error } from "console";

dotenv.config({
  path: "./",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at prot : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed");
  });
