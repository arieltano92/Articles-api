exports.badRequestError = (msg = 'Bad request') => ({ message: msg, statusCode: 400 });
exports.notFoundError = (msg = 'Not found') => ({ message: msg, statusCode: 404 });
