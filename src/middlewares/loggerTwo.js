const loggerTwo = (req, res, next) => {
  console.log(req.path, req.route, "second logger");
  next();
};

module.exports = loggerTwo;
