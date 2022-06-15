const jwt = require("jsonwebtoken");

// AUTHENTICATION OF USER BY USER DETAILS

const authenticate = async function (req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  // If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });
  next();
};

// AUTHORISATION FOR USER TO MAKE CHANGES
const authorise = async function (req, res) {
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
  let userToBeModified = req.params.userId;
  let userLoggedIn = decodedToken.userId;

  if (userToBeModified != userLoggedIn)
    return res.send({
      status: "false",
      msg: "you are not authorised to update anothers data",
    });
  next();
};

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
