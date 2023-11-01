const { config : {aes}  } = require("../configs/dev.config");
const { decode , encode } = require('base-64');
const encrypts = async (data) => {
    let sty = JSON.stringify(data)
    const encodedData = encode(sty);
    return encodedData
};
module.exports = encrypts;