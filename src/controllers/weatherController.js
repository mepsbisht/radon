let axios = require("axios");

const getWeather = async function (req, res) {
  try {
    let id = req.query.appid;
    let location = req.query.q;
    var options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${id}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data.main.temp });
  } catch (err) {
    res.status(500).send({
      msg: err.message,
    });
  }
};

const citiesByTemp = async function (req, res) {
    try{
  let cities = [
    "Bengaluru",
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Chennai",
    "London",
    "Moscow",
  ];
  let id = req.query.appid;
  let arr = [];

  for (i = 0; i < cities.length; i++) {
    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${id}`
    }
    let result = await axios(options);
    let temp = result.data.main.temp;
    let place = result.data.name;
    arr.push({ "city": place, "temp": temp });
    console.log(result);
  }
  arr.sort(function(a,b){return a.temp-b.temp})
  
  res.status(200).send({temp:arr})
}catch (err) {
    res.status(500).send({
      msg: err.message,
    });
  }
};

module.exports.getWeather = getWeather;
module.exports.citiesByTemp = citiesByTemp;
