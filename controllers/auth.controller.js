const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    roleId:req.body.roleId
  })
    .then(user => {
      if (user.roleId) {
        console.log("body has role")
        Role.findAll({
          where: {
            id: req.body.roleId
            
          }
        }).then(role => {
          user.setRole(role.id).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        console.log("body with no role")
        console.log("param =>",req.body.roleId,"\n object =>",user.roleId)
        // user role = 1
        user.setRole(1).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      var authorities ;
      user.getRole().then(role => {
        
          authorities = "ROLE_" + role.name.toUpperCase();
        
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          role: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
