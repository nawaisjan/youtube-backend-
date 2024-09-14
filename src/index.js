//require("dotenv").config({ path: "/" });
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
import { connect } from "http2";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./",
});

connectDB();
