const joi = require("joi");

const productSchema = joi.object({
  name: joi.string().required().messages({
    "string.required": `"name is not incorrect"`,
  }),
  email: joi.string().email().required().messages({
    "string.email": "this is not a good email",
    
  }),
  phon: joi.number().min(8).max(15).messages({
    
    "string.min": `"phone need to be unless 10 numbers'`,
    "string.max": `"phone must be 10 numbers onley`,

  }),
  txt: joi.string().required().messages({
    "string.required": `"need to give us a comment'`,
  }),
  post_id: joi.number(),
  phone:joi.number(),
  remember: joi.boolean(),
 
  
});

const createProductSchema = (data) => {
  return productSchema.validateAsync(data, { abortEarly: false });
};

module.exports.createProductSchema = createProductSchema;
