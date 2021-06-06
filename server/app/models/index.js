const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

//AUTH
db.user = require("./user.model");
db.role = require("./role.model");
db.tutorials = require("./tutorial.model")(mongoose);
db.profiles = require("./Profile");

db.ROLES = ["user", "admin", "moderator"];


module.exports = db;