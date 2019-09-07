var mongoose = require("mongoose");
var md5 = require("md5");
var TokenGenerator = require("uuid-token-generator");
const uuidv4 = require("uuid/v4");
var userSchema = require("/home/wohlig/Documents/Project/chatApplicationBackend/mongooseModel/User.js");
userSchema.statics = {
  createUser: function(data, callback) {
    console.log("DFGHJKLKJUYHJKIJU", data);
    data.password = md5(data.password);
    var userData = new this(data);
    userData.save(callback);
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
var userModel = mongoose.model("User", userSchema);
module.exports = userModel;
