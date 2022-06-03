const express = require("express");
const router = express.Router();

let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];

router.post("/players", function (req, res) {
  // req.body.name;

  players.forEach((obj) => {
    if (req.body.name == obj.name) {
      res.send({ data: "Name already exists", status: false });
      return;
    }
  });

  players.push(req.body);

  res.send({ data: players, status: true });
});

module.exports = router;
