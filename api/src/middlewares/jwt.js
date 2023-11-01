const jwt = require('jsonwebtoken');
const { config : {jwtkey}  } = require("../configs/dev.config");

const Jwttoken = async ( data ) => {
    const token = jwt.sign( data , jwtkey );
    return token;
};
module.exports = Jwttoken;