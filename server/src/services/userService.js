const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("Потребител с такъв имейл съществува!");
  }
  const user = await User.create(userData);
  const result = getAuthResult(user);
  return result;
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Невалидна парола или имейл!");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Невалидна парола или имейл!");
  }

  const result = getAuthResult(user);
  return result;
};

function getAuthResult(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "10s",
  });
  const refreshToken = generateRefreshToken(user);

  return {
    userData: {
      _id: user._id,
      email: user.email,
      accessToken,
    },
    refreshToken,
  };
}
function generateRefreshToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  }); // Refresh token validity
}
