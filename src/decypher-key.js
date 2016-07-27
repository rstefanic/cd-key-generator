var error = require("./error.js");

var validKey = function(key) {
  var isValidKey = true;

  key.forEach(function(set) {
    if (set.length > 5) {
      isValidKey = false;
    }
  });
  return isValidKey;
};

var decypher = function(key) {
  key = key.split("-");
  if (validKey(key)) {

  } else {
    error.printError("201", "INVALID KEY ENTERED FOR DECYPHER");
  }
};


module.exports.decypher = decypher;
