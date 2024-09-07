const { validateSchema } = require('../schemas');
const { badRequestError } = require('../errors');

exports.validateReqData =
  (schema, paramsType = 'body') =>
  (req, res, next) => {
    const validation = validateSchema(schema, req[paramsType]);
    if (validation.error) {
      console.log(validation.error)
      next(badRequestError(validation.error));
    }
    next();
  };  

exports.paramsTypes = {
  body: 'body',
  query: 'query',
  params: 'params',
  headers: 'headers',
};
