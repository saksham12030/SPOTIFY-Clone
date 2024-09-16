const jwt = require("jsonwebtoken");
const exportss = {};
exportss.getToken = (email, user) => {

  let token = jwt.sign({ _id: user._id }, "secret");
  return token;
};
module.exports = exportss;
