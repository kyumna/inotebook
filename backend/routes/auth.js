const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a user using: POST "api/auth/". Does not require authentication.
router.post('/', (req, res) => {

  const user = new User(req.body);
  user.save();

  res.send(req.body);
  console.log(req.body)


});

module.exports = router;