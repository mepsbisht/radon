const randomApi = async function (req, res, next) {
  res.send({ msg: "i am from controller" });
};
const randomApi2 = async function (req, res, next) {
    res.send({ msg: "i am from second controller" });
  };

module.exports.randomApi = randomApi;
module.exports.randomApi2 = randomApi2;
