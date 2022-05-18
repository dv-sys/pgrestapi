const {myExecute} = require('../helper/corefuncs.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    try {
      const { email, password } = req.body;
  
      if (!(email && password)) {
        res.status(400).send("All input is required");
        return;
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
  
        user.token = token; // save user token
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } 
    catch (err) {
      console.log(err);
    }
}

//Update password in database(encrypted form)
/*const login1 = async (req, res) => {
    query = `SELECT * FROM users`;
    const result = await myExecute(query);
    console.log(result.length);
    const cnt = result.length;
    for(let i=0; i < cnt; i++){
        const pass = result[i].password;
        const id = result[i].id;
        encryptedPassword = await bcrypt.hash(pass, 10); 
        console.warn('Pass : ' , pass); 
        query1 = `UPDATE users SET password='${encryptedPassword}' WHERE id=${id} `;
        const res1 = await myExecute(query1);    
    }
}*/

module.exports = login