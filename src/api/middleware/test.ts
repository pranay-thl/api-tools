const { param, body, oneOf, validationResult } = require("express-validator");

const echo = [
  param("num")
    .notEmpty()
    .exists({ checkNull: true, checkFalsy: true })
    .isNumeric(),
  (req, res, next) => {
    let err = validationResult(req);
    console.log(err.errors);
    if (!err.isEmpty()) {
      return res.status(400).json({ error: err.errors });
    } else {
      return next();
    }
  },
];
export { echo };
