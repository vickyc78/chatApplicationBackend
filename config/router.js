var User = require("/home/wohlig/Documents/Project/chatApplicationBackend/controllers/UserController.js");
var userModel = require("/home/wohlig/Documents/Project/chatApplicationBackend/models/UserModel.js");
module.exports = function(router) {
  // router.post("/createUsers", function(req, res) {
  //   console.log("RDTFYGUHIJO", req.body);
  //   userModel.createUser(req.body, res.callback);
  // });
  router.post("/createUser", User.createUsers);
  router.get("/loginUser", User.loginUser);
  router.post("/getOne", User.getOne);
};
