var mongoose = require("mongoose");
var md5 = require("md5");
var TokenGenerator = require("uuid-token-generator");
const uuidv4 = require("uuid/v4");
var async = require("async");
var http = require("https");
var querystring = require("querystring");
var userSchema = require("/home/wohlig/Documents/Project/chatApplicationBackend/mongooseModel/User.js");

userSchema.statics = {
  createUser: function(data, callback) {
    // async.waterfall(
    //   [
    //     function(callback) {
    //       User.findOne({
    //         password: md5(data.password)
    //       }).then(result => {
    //         console.log("TFYGUhiugfryguh", result);
    //       });
    //     }
    //   ],
    //   callback
    // );
    data.password = md5(data.password);
    var userData = new this(data);
    userData.save((err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  loginUser: function(data, callback) {
    this.findOneAndUpdate(
      {
        password: md5(data.password)
      },
      {
        $push: {
          accessToken: {
            token: uuidv4()
          }
        }
      }
    ).exec(function(err, result) {});
  },
  getOne: function(data, callback) {
    this.findOne({
      _id: data.userId
    }).exec(function(err, result) {});
  }
  // sendOtp: function(data, callback) {
  //   console.log("FYYYYYYYYYYYFYYYYYYYYY", data);
  //   var test = querystring.stringify({
  //     // otp: data.otp,
  //     sender: "tryal",
  //     message: "hello"
  //     // mobile: data.mobile,
  //     // authkey: data.authKey
  //   });
  //   var options = {
  //     method: "POST",
  //     hostname: "control.msg91.com",
  //     port: null,
  //     path:
  //       "/api/sendotp.php?&otp={{data.otp}}&sender=try&message='test'&mobile=+917208372556&authkey=291342An3Ppx33Wqa5d64ca9a",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     }
  //   };

  //   console.log("@@@@@@@@@@@@@@@@@@@", options);
  //   var req = http.request(options, function(res) {
  //     var chunks = [];
  //     // console.log("################", res);
  //     res.on("data", function(chunk) {
  //       chunks.push(chunk);
  //     });

  //     res.on("end", function() {
  //       var body = Buffer.concat(chunks);
  //       console.log(body.toString());
  //     });
  //   });

  //   req.end();
  // }
};
var User = mongoose.model("User", userSchema);
module.exports = User;
