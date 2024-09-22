const jwt = require("jsonwebtoken");

const verifyRefreshToken = (req, res, next) => {
  const refreshToken = req.cookies.authCookie;
  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

module.exports = { verifyRefreshToken };
