let axios = require("axios");

const getById = async function (req, res) {
  try {
    
    let options = {
      method: "post",
      url: "https://api.imgflip.com/caption_image?template_id=181913649&text0=hi&text1=hello&username=chewie12345&password=meme@123",
    };
    let result = await axios(options);
    res.status(200).send({
      msg: result.data,
    });
  } catch (err) {
    res.status(500).send({
      msg: err.message,
    });
  }
};

module.exports.getById = getById;
