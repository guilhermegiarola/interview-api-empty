function invalidRouteValidator() {
  return (req, res, next) => {
    return res.json({ message: `Page not found.` });
  };
}

module.exports = { invalidRouteValidator };
