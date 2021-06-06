const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const morgan = require("morgan");

const conversationRoute = require('./app/routes/conversation');
const messageRoute = require('./app/routes/message');

const app = express();

// -- one Cors Client ReactJS-- //
var corsOptions = {
  origin: "http://localhost:8081"
};

// -- one Cors Client Angular-- //
//var corsOptions = {
//  origin: "http://localhost:4200"
//};

// -- double Cors Client -- //
//var corsOptions = {
//  origin: ["http://localhost:8081","http://localhost:8082"]
//};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// console method
app.use(morgan('dev'));

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
//app.get("/", (req, res) => {
//  res.json({ message: "Welcome to bezkoder application." });
//});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/turorial.routes")(app);

app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);


// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
