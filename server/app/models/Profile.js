const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const Profile = mongoose.model(
    "Profile",
    new mongoose.Schema({
        username: String,
        email: String,
        users: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }
    })
);

module.exports = Profile;