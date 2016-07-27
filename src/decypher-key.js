var error = require("./error.js");

var validKey = function(key) {
  var isValidKey = true;
  key.forEach(function(group) {
    if (group.length > 5) {
      isValidKey = false;
    }
  });
  return isValidKey;
};

var validate = function(groupFromKey) {
  var sumOfGroup = 0;
  for (var i = 0; i < groupFromKey.length; i++) {
    sumOfGroup += groupFromKey.charCodeAt(i);
  }
  if (sumOfGroup <= 300) {
    return true;
  } else {
    return false;
  }
};

var decypher = function(key) {
  var isAValidKey = true;
  var validGroup = 0;
  var invalidGroup = 0;
  key = key.split("-");
  if (validKey(key)) {
    key.forEach(function(group) {
      isAValidKey = validate(group);
      isAValidKey  ? validGroup++ : invalidGroup++;
    });
      if (invalidGroup > 0) {
        isAValidKey = false;
      }
    return isAValidKey;
  } else {
    error.printError("201", "INVALID KEY ENTERED FOR DECYPHER");
  }
};


module.exports.decypher = decypher;
