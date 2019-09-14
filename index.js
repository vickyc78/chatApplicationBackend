const SendOtp = require("sendotp");
const sendOtp = new SendOtp("291342An3Ppx33Wqa5d64ca9a");
sendOtp.send("918329548838", "PRIIND", function(error, data) {
  console.log(data);
});
