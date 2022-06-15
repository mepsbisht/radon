const jwt = require("jsonwebtoken");

// AUTHENTICATION OF USER BY USER DETAILS

const mid1 = async function (req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  // AUTHORISATION FOR USER TO MAKE CHANGES 
  
  let userToBeModified = req.params.userId;
  let userLoggedIn = decodedToken.userId;

  if (userToBeModified != userLoggedIn)
    return res.send({
      status: "false",
      msg: "you are not authorised to update anothers data",
    });
  next();
};

module.exports.mid1 = mid1;
