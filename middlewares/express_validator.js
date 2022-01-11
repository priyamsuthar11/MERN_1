const { body, validationResult } = require('express-validator')
const userValidationRules = () => {
  return [
    // username must be an email
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('email is not valid'),
    // password must be at least 5 chars long
    body('password').notEmpty().withMessage('password  is required').isLength({ min: 3 }).withMessage('password shold be more than 3 character'),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const data = errors.errors[0].msg;


  return res.status(422).json({
    code : 422,
    msg : data
  })
}

module.exports = {
  userValidationRules,
  validate,
}
