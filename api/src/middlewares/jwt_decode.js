const jwt = require('jsonwebtoken');
const { config : {jwtkey}  } = require("../configs/dev.config");

const Jwttokendecode = async ( data ) => {
    const decode = jwt.verify( data , jwtkey );
    return decode;
};
module.exports = Jwttokendecode;