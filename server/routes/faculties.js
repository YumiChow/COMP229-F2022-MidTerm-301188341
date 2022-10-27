/**
 * File Name: faculties.js
 * Auther: Yuchen Zhou
 * Student ID: 301188341
 * Web App Name: Faculty
 */

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const faculties = require("../models/faculties");

// define the faculty model
let faculty = require("../models/faculties");

/* GET faculties List page. READ */
router.get("/", (req, res, next) => {
  // find all faculties in the faculties collection
  faculty.find((err, faculties) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("faculties/index", {
        title: "Faculties",
        faculties: faculties,
      });
    }
  });
});

//  GET the faculty Details page in order to add a new faculty
router.get("/add", (req, res, next) => {
  faculty.find((err, faculties) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("faculties/details", {
        title: "Faculties",
        faculties: faculties,
      });
    }
  });
});

// POST process the faculty  Details page and create a new faculty  - CREATE
router.post("/add", (req, res, next) => {
  faculty.create(req.body, (err) => {
    if (err) {
      return console.error(err);
    } else {
      res.redirect('/faculties')
    }
  });
});

// GET - process the delete
router.get("/delete", (req, res, next) => {
  faculty.deleteMany({
    Facultyname: req.query.name
  }, (err) => {
    if (err) {
      return console.error(err);
    } else {
      res.redirect('/faculties')
    }
  })
});

// GET the faculty  Details page in order to edit an existing faculty
router.get("/:id", (req, res, next) => {
  faculty.findOne((err, faculties) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("faculties/details", {
        title: "Faculties",
        faculties: faculties
      });
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post("/:id", (req, res, next) => {
  faculty.updateOne({
    id: req.body.id
  }, req.body, () => {
    faculty.find((err, faculties) => {
      if (err) {
        return console.error(err);
      } else {
        res.redirect('/faculties')
      }
    });
  })
});


module.exports = router;
