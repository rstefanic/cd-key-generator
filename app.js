var generate = require("./src/generate-key.js"),
      message = require("./src/message.js"),
      decypher = require("./src/decypher-key.js"),
            error = require("./src/error.js");

var arguments = process.argv.slice(2);

if (arguments[0] == null) {
  console.error("Sorry, there were no arguments passed. Please refer to the documentation for information on how to generate or decypher a key.");
} else if ((arguments[0] == "-g") || (arguments[0] == "--generate")) {
  var length = arguments[1] || null;
  if (length === null) {
    error.printError(01, "Please input the amount of groupings that you'd like the key to have.");
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
