const User = require('../models/userModel');


exports.registro = async (req, res) => {
    try {
      const newuser = new User(req.body);
      const user = await newuser.save();
      res.send("Criado com sucesso");
    } catch (error) {
      return res.status(400).json(error);
    }
  };

exports.login = async (req, res) => {
    try {
      const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
      });
      if (user) {
        res.send(user);
      } else {
        return res.status(400).json({ message: "Username ou senha inválidos" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };
