var createSalt = function(){
  var salt = Math.floor((Math.random() * 10) + 1);
  salt -= Math.floor((Math.random() * 10) + 1);
  return salt;
};

var fiveValues = function() {
  var everyFiveSum = 0;
  var everyFiveKey = "";

  for (var i = 0; i < 5; i++){
    var currentValue = Math.floor((Math.random() * 74) + 48) + createSalt();

    //start from characters 48 until 122; skip ascii values 58-64 and 91-96
    while ((currentValue >= 58 && currentValue <= 64) || (currentValue >= 91 && currentValue <= 96)
              || (currentValue < 48) || (currentValue > 122)) {
      currentValue = Math.floor((Math.random() * 74) + 48) + createSalt();
    }

    everyFiveSum += currentValue;
    everyFiveKey += String.fromCharCode(currentValue);
    // console.log(everyFiveKey);
    if (everyFiveSum > 300) {
      return fiveValues();
    }
  }
  return everyFiveKey;
};

function createKey(groupings) {
  var key = "";
  for (var i = 0; i < groupings; i++){
    key += fiveValues();
    if (i !== groupings - 1) {
      key += "-";
    }
  }
  return key;
}

module.exports.createKey = createKey;
