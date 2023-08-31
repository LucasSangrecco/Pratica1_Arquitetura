var fs = require('fs');

function bank() {}

bank.prototype.getDados = function(callback) {
  fs.readFile('./data/bancos.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);

    }	

    obj.bancos.forEach(function(bancos) {
      if (i >=  0) {
        data[i] = bancos;
        i--;
      }
    });
    callback(err, data);
  });
};

module.exports = function(){
  return bank;
}