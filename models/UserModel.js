var mongoose = require("mongoose");
var md5 = require("md5");
var TokenGenerator = require("uuid-token-generator");
const uuidv4 = require("uuid/v4");
var async = require("async");
var userSchema = require("/home/wohlig/Documents/Project/chatApplicationBackend/mongooseModel/User.js");

userSchema.statics = {
  createUser: function(data, callback) {
    async.waterfall(
      [
        function(callback) {
          User.findOne({
            password: md5(data.password)
          }).then(result => {
            console.log("TFYGUhiugfryguh", result);
          });
        }
      ],
      callback
    );
    // data.password = md5(data.password);
    // var userData = new this(data);
    // userData.save((err, result) => {
    //   if (err) {
    //     callback(err);
    //   } else {
    //     callback(null, result);
    //   }
    // });
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
};
var User = mongoose.model("User", userSchema);
module.exports = User;
