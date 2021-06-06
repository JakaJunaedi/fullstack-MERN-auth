const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  // user
  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  // moderator
  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  // admin IT
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

  //reset password
  app.put("/api/test/resetpassword", controller.resetPassword);
  app.put("/api/test/changepassword", controller.changePassword);

  // User Data CRUD
  app.get("/api/data-user", controller.allUser);
  app.put("/api/update-user/:userId", controller.updateUser);
};
