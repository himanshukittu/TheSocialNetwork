var express = require('express');
var mongoose = require('mongoose');
var userInfoSchema = require("../schemas/userinfo.schema");
let _ = require("lodash");
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

var router = express.Router();
let User = mongoose.model("User", userInfoSchema);

router.post('/signup', async (req, res, next) => {
  let userInput = _.pick(req.body, ['name', 'email', 'phone', 'password', 'gender', 'dateOfBirth', 'notificationTypes']);
  let isUserAlreadyRegistered = await User.findOne({ email: userInput['email'] });
  if (!isUserAlreadyRegistered) {
    let user = new User({
      name: userInput['name'],
      email: userInput['email'],
      phone: userInput['phone'],
      password: await bcrypt.hash(userInput['password'], 5 ),
      gender: userInput['gender'],
      dateOfBirth: userInput['dateOfBirth'],
      notificationTypes: userInput['notificationTypes']
    });


    let result = await user.save();
    let jwtPayload = _.pick(result, ['_id', 'email']);
    let jsonWebToken = generateJWTToken(jwtPayload);
    res.setHeader("x_token", jsonWebToken);
    res.send(_.pick(result, ['name']));
    next();
  }
  else {
    return res.status(400).send("User already registered");
  }
});

router.post('/login', async (req, res, next) => {
  let userInput = _.pick(req.body, ['email', 'password']);
  let selectedUser = await User.findOne({ email: userInput['email'] });
  if (!selectedUser) {
    res.status(403).send("Invalid username and/or password");
  }
  else {
    let validPassword = await bcrypt.compare(userInput['password'],selectedUser.password);
    if (validPassword) {
      let jwtPayload = _.pick(selectedUser, ['_id', 'email']);
      let jsonWebToken = generateJWTToken(jwtPayload);
      res.setHeader("x_token", jsonWebToken);
      res.send(_.pick(selectedUser, ['name']));
    }
    else {
      return res.status(403).send('Invalid username and/or password');
    }
  }
});

generateJWTToken = function (payload) {
  return jwt.sign(payload, "ilumadhuri");
}




module.exports = router;
