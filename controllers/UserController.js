var userModel = require("/home/wohlig/Documents/Project/chatApplicationBackend/models/UserModel.js");

exports.createUsers = function(req, res, next) {
  console.log("rdtfyguhijokpjohig", req.body);
  userModel.createUser(req.body, function(err, user) {
    console.log("ESRdtfyhijohiguf", user);
    if (err) {
      res.json({
        error: err
      });
    } else {
      res.send(user);
    }
  });
};
exports.loginUser = function(req, res, next) {
  console.log("rdtfyguhijokpjohig", req.body);
  userModel.loginUser(req.body, function(err, user) {
    console.log("ESRdtfyhijohiguf", user);
    // if (err) {
    //   res.json({
    //     error: err
    //   });
    // }
    // res.json({
    //   message: "User created successfully"
    // });
  });
};
