module.exports = {
  secret: process.env.JWT_SECRET || 'your_jwt_secret_key_here',
  expiresIn: '1d', 
};
