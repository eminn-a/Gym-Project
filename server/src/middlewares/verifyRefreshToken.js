const jwt = require("jsonwebtoken");

const verifyRefreshToken = (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid refresh token

    req.user = user; // Attach user info to request object
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = { verifyRefreshToken };
