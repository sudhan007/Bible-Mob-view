const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createToken = (data, role) => {
  const { JWT_SECRET_USER, JWT_SECRET_ADMIN } = process.env;

  const sign = jwt.sign(
    data,
    role == "user" ? JWT_SECRET_USER : JWT_SECRET_ADMIN,
    {
      expiresIn: "10h",
    }
  );

  return sign;
};

exports.checkToken = (token, role) => {
  const { JWT_SECRET_USER, JWT_SECRET_ADMIN } = process.env;

  if (!token) return false;

  const verify = jwt.verify(
    token,
    role == "user" ? JWT_SECRET_USER : JWT_SECRET_ADMIN
  );
  return verify;
};

exports.checkPassword = (password, enteredPassword) =>
  bcrypt.compareSync(password, enteredPassword);
