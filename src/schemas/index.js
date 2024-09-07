exports.validateSchema = (schema, data) => {
  const validation = schema.validate(data);
  if (validation.error) console.log(validation);
  return validation;
};
