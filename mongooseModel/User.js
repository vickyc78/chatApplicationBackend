var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    index: true
  },
  password: {
    type: String,
    select: false
  },
  email: {
    type: String
  },
  mobile: {
    type: Number,
    unique: true
  },
  accessToken: [
    {
      token: {
        type: String,
        index: true
      },
      expiry: {
        type: Date
      }
    }
  ]
});
// export default mongoose.model("User", userSchema);
module.exports = userSchema;

//Export function to create "SomeModel" model class
// module.exports = mongoose.model("User", userSchema);
