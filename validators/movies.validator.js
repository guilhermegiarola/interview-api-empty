function validateFields(fields) {
  return (req, res, next) => {
    for (const field of fields) {
      if (!req.query[field]) {
        return res.json({ message: `${field} is missing.` });
      }
    }
    next();
  };
}

function validateYearType() {
  return (req, res, next) => {
    if (isNaN(req.query["year"])) {
      return res.json({ message: `Invalid year.` });
    }
    next();
  };
}

module.exports = { validateFields, validateYearType };
