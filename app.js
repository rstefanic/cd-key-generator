var generate = require("./src/generate-key.js"),
      message = require("./src/message.js"),
      decypher = require("./src/decypher-key.js"),
            error = require("./src/error.js");

var arguments = process.argv.slice(2);

if (arguments[0] == null) {
  error.printError(01,"NO ARGUMENTS PASSED");
} else if ((arguments[0] == "-g") || (arguments[0] == "--generate")) {
  var length = arguments[1] || null;
  if (length === null) {
    error.printError(02, "GROUPING NUMBER ERROR");
  } else {
    message.displayKey(generate.createKey(arguments[1]));
  }
} else if ((arguments[0] == "-d") || (arguments[0] == "--decyper")) {
    if (decypher.decypher(arguments[1]) === true) {
      message.displayKeyValidity(true, arguments[1]);
    } else {
      message.displayKeyValidity(false, arguments[1]);
    }
}
