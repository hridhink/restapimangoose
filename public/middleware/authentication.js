const jwt = require('jsonwebtoken')
const userSchema = require('../../models/user')
exports.authenticate = async function (req, res, next) {
  try {
    const auth_token = req.headers.authorization;// doesnt need to split token


    const decryptToken = jwt.verify(auth_token, 'hridhin#567#')
    const name = decryptToken.name;
    const Name = userSchema.findOne({ name })
    if (!Name) {
      throw 'Invalid user';
    } else {
      next();

    }
  }
  catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }

} 