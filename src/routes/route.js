const express = require("express");
const myHelper = require("../util/helper");
const underscore = require("underscore");
const lodash = require("lodash");
const res = require("express/lib/response");

const router = express.Router();

router.get("/GET/movies", function (req, res) {
  let movieList = ["Dhoom", "Singham", "KGF", "Race"];
  res.send(movieList);
});

router.get("/GET/movies/:indexNumber", function (req, res) {
  let movieList = ["Dhoom", "Singham", "KGF", "Race"];
  if (req.params.indexNumber > movieList.length) {
    res.send("Please use a valid index");
  }
  res.send(movieList[req.params.indexNumber]);
});

router.get("/GET/films", function (req, res) {
    let movie = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    }
  ];
  res.send(movie);
});

router.get("/GET/films/:filmId", function (req, res) {
    let movie = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];

  movie.find((obj) => {
      if (obj.id == req.params.filmId) {
        res.send(obj);
        return;
      }
  });
  // res.send(movie);
});


router.get("/test-me", function (req, res) {
  myHelper.printDate();
  myHelper.getCurrentMonth();
  myHelper.getCohortData();
  let firstElement = underscore.first(["Sabiha", "Akash", "Pritesh"]);
  console.log(
    "The first element received from underscope function is " + firstElement
  );

  res.send("My first ever api!");
});

router.get("/hello", function (req, res) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(lodash.chunk(months, 3));

  let oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  console.log(lodash.tail(oddNum));
  let a = [1, 2, 2];
  let b = [2, 3, 2];
  let c = [3, 4];
  let d = [4, 5];
  let e = [5, 6];

  console.log(lodash.union(a, b, c, d, e));
  res.send("Hello there!");

  let arr1 = ["horror", "The Shining"];
  let arr2 = ["drama", "Titanic"];
  let arr3 = ["thriller", "Shutter Island"];
  let arr4 = ["fantasy", "Pans Labyrinth"];

  console.log(lodash.fromPairs([arr1, arr2, arr3, arr4]));
});

router.get("/candidates", function (req, res) {
  console.log(
    "Query paramters for this request are " + JSON.stringify(req.query)
  );
  let gender = req.query.gender;
  let state = req.query.state;
  let district = req.query.district;
  console.log("State is " + state);
  console.log("Gender is " + gender);
  console.log("District is " + district);
  let candidates = ["Akash", "Suman"];
  res.send(candidates);
});

router.get("/candidates/:canidatesName", function (req, res) {
  console.log("The request objects is " + JSON.stringify(req.params));
  console.log("Candidates name is " + req.params.canidatesName);
  res.send("Done");
});

module.exports = router;
// adding this comment for no reason
