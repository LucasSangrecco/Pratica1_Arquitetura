module.exports.index = function(application, req, res) {
    var bankModel = new application.src.model.bank();
  
    bankModel.getDados(function(err, result) {
      res.render("bank/index", {bank : result});
    });
  }