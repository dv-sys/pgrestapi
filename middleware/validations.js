const updatevalid = (req, res, next) => {
    const id = req.body.id;
    if (!req.body.id) {
      return res.status(403).send("id is required for Updation");
    }
    return next();
  };
  
  module.exports = {updatevalid};