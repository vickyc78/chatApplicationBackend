var userModel = require("/home/wohlig/Documents/Project/chatApplicationBackend/models/UserModel.js");
module.exports = function(router) {
  router.post("/createUser", (req, res, next) => {
    console.log("RESRESRESRES", res);
    userModel.createUser(req.body, function(err, user) {
      if (err) {
        res.json({
          error: err
        });
      } else {
        res.send(user);
      }
    });
    // userModel.createUser(req.body, res.callback);
  });
  // exports.loginUser = function(req, res, next) {
  //   userModel.loginUser(req.body, function(err, user) {
  //     // if (err) {
  //     //   res.json({
  //     //     error: err
  //     //   });
  //     // }
  //     // res.json({
  //     //   message: "User created successfully"
  //     // });
  //   });
  // };
  // exports.getOne = function(req, res, next) {
  //   userModel.getOne(req.body, function(err, user) {
  //     if (err) {
  //       res.json({
  //         error: err
  //       });
  //     } else {
  //       res.send(user);
  //     }
  //   });
  // };
  router.post("/sendOtp", (req, res, next) => {
    userModel.sendOtp(req.body, function(err, user) {
      console.log("USER USER", user);
      if (err) {
        res.json({
          error: err
        });
      } else {
        res.send(user);
      }
    });
    // userModel.createUser(req.body, res.callback);
  });
};
