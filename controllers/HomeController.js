module.exports.index = function(req, res) {
    res.render('index', {'title': 'AgroCalc Web'});
}

module.exports.sobre = function(req, res) {
    res.render('sobre', {'title': 'AgroCalc Web - Sobre'});
}