var userModel = require("/home/wohlig/Documents/Project/chatApplicationBackend/models/UserModel.js");
module.exports = function(router) {
  router.post("/createUser", (req, res, next) => {
    userModel.createUser(req.body, function(err, user) {
      if (err) {
        res.json({
          error: err
        });
      } else {
        res.send(user);
      }
    });
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
};
