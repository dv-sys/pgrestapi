<<<<<<< HEAD
const {myExecute} = require('../helper/corefuncs.js');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
   
const config = process.env;

const verifyToken = async (req, res, next) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(400).send("All input is required");
  }
  const query = `SELECT * FROM users WHERE email='${email}'`;
  const result = await myExecute(query);
  const user = result[0];
  
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { user_id: user.id, email },
      process.env.JWT_KEY,
      { expiresIn: '1m',}
    );
    try {
      const decoded = jwt.verify(token, config.JWT_KEY);
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }  
    return next();
  }
  else{
     //res.status(401).send('Username or password not matched');
     res.redirect('/?err=invalid');
  }
=======
const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["access-token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.JWT_KEY);
  } catch (err) {
    return res.status(401).send(err.message);
  }
  return next();
>>>>>>> 46f40f66a0ebd3e78ca61fd903cb95c3507cd84b
};

module.exports = verifyToken;