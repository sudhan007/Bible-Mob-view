const { config : {aes}  } = require("../configs/dev.config");
const { encode  , decode } = require('base-64');

const decrypts = async (req,res , next) => {
  const { phone } = req.body;
  const decodedData = decode(phone);
  req.user = decodedData
  next();
};

module.exports = decrypts;