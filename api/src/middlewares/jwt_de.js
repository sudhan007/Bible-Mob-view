const { config : {aes}  } = require("../configs/dev.config");
const jwt = require('jsonwebtoken');
const { config : {jwtkey}  } = require("../configs/dev.config");
const { UserModel: User } = require("../models");

const jwt_de = async (req,res , next) => {
  const { token } = req.body;
  const decode = jwt.verify( token , jwtkey );
  let string_without_quotes = decode.replace(/"/g, '')
  console.log(string_without_quotes , ';cxcxcxcvzxc')
  let one = await User.findOne({ _id : string_without_quotes })
  .then(async(re)=>{
    console.log(re , ';cxcxcxcvzxc')
    req.user = true
    next()
  })
  .catch((err)=>{
    return res.status(500).json({ message: err.message, status: false });
  })
};

module.exports = jwt_de;