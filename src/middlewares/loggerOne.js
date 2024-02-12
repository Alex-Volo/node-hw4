const loggerOne = (req, res, next) => {
  console.log(req.hostname, req.url);
  next();
};

module.exports = loggerOne;
