const jwt = require("jsonwebtoken");

console.log("JWT_SECRET:", process.env.JWT_SECRET);

exports.auth = (req, res, next) => {
  const token = req.header("x-Authorization");
  console.log(token);
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(401).json({
        message: "Не сте ауторизиран!",
      });
    }
  } else {
    next();
  }
};
