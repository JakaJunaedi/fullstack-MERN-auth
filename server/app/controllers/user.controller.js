const  JsonWebToken  = require("jsonwebtoken");
const { secret, client_url } = require("../config/auth.config");
const User = require("../models/user.model");
const Tutor = require("../models/tutorial.model");
const { sendEmail } = require('../helpers');
const bcryptjs = require('bcryptjs');
const Profile = require("../models/Profile");

exports.allAccess = (req, res) => {
  res.status(200).send("MY Application.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  const adminIt = "Admin IT";
  res.status(200).send(adminIt);
};

// reset password
exports.resetPassword = async (req, res) => {
  const { email } =  req.body
  const user = await User.findOne({email:email})
  // Email not found
  if (!user) {
    return res.status(200).json({
      status: false,
      message: "Email not found"
    })
  }
 
  const token = JsonWebToken.sign({
    iduser: user._id
  },secret)

  await user.updateOne({resetPasswordLink:token})

  const templateEmail = {
    from: 'b9f5cb6711ee53',
    to: email,
    subject: "Reset Password",
    html: `<p><center><h1>Jack Aplikasi</h1></center></p><p>Silakan klik link untuk reset password</p> <p><a href="${client_url}/resetpassword/${token}">${client_url}/resetpassword/${token}</a></p>`
  }
  sendEmail(templateEmail)

  return res.status(200).json({
    status: true,
    message: "Link reset password terkirim"
    //message: req.body.email
  })
};

exports.changePassword = async (req, res) => {
  const { token, password } = req.body
  console.log('token', token)
  console.log('password', token)

  const user = await User.findOne({resetPasswordLink: token})
  //console.log(user)
  if (user) {
    const hashPassword = await bcryptjs.hash(password, 10)
    user.password = hashPassword
    await user.save()
    return res.status(201).json({
      status: true,
      message: "password berhasil di ganti"
    })
  }
}

exports.profiles = (req, res) => {
  const id = req.body.id;
  console.log(id);

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Data user " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// Data All User CRUD //
exports.allUser = (req, res) => {
  //res.status(200).send('data user');

  User.find({}).exec().then(items => {
    res.status(200).json({items});
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

exports.updateUser = (req, res) => {
  //res.status(200).send('update user');

  User.update({username: req.body.username, email: req.body.email}).exec().then(items => {
    res.status(200).json({ message: 'user update'});
  }).catch(err => {
    console.log(err);
    res.status(500).json({ error: err});
  });
};