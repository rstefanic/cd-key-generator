function displayKey(key) {
  console.log();
  console.log("Your new key: ");
  console.log(key);
  console.log();
}

var displayKeyValidity = function(valid, key) {
  if (valid) {
    console.log();
    console.log("\t>> Yes");
    console.log();
    console.log("\t" + key + " is a valid key.");
    console.log();
  } else {
    console.log();
    console.log("\t>> Sorry");
    console.log();
    console.log("\t" + key + " is NOT a valid key.");
    console.log();
  }
};

module.exports.displayKey = displayKey;
module.exports.displayKeyValidity = displayKeyValidity;
