var createSalt = function(){
  var salt = Math.floor((Math.random() * 10) + 1);
  salt -= Math.floor((Math.random() * 10) + 1);
  return salt;
};

function create_key(keylength) {
  var key = "";
  var everyFour = 0;

  for (var i = 0; i <= keylength; i++){
    var currentValue = Math.floor((Math.random() * 74) + 48) + createSalt();

    //start from characters 48 until 122; skip ascii values 58-64 and 91-96
    while ((currentValue >= 58 && currentValue <= 64) || (currentValue >= 91 && currentValue <= 96)
              || (currentValue < 48) || (currentValue > 122)) {
      currentValue = Math.floor((Math.random() * 74) + 48) + createSalt();
    }
    key += String.fromCharCode(currentValue);
    everyFour++;

    if (everyFour === 4 && i !== keylength) {
      key += " - ";
      everyFour = 0;
    }
  }

  return key;
}

module.exports.create_key = create_key;
