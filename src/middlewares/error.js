// eslint-disable-next-line no-unused-vars
exports.errorMiddleware = (err, req, res, next) => {
  res.status(err.statusCode || 500).send({ message: err.message || 'Internal Server Error' });
};
