/**
 * File Name: faculties.js
 * Auther: Yuchen Zhou
 * Student ID: 301188341
 * Web App Name: Faculty
 */

let mongoose = require("mongoose");

// create a model class
let Faculty = mongoose.Schema(
  {
    Facultyid: Number,
    Facultyname: String,
    Department: String,
    Subject: String,
  },
  {
    collection: "faculties",
  }
);

module.exports = mongoose.model("Faculty", Faculty);
