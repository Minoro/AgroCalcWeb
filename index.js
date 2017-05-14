var contentProvider = require('./content_provider/ContentProvider');
var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var app = express();


const PORT = process.env.PORT || contentProvider.CONFIG.DEV_PORT;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', routes);


//arquivos estáticos
app.use(express.static('public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error(contentProvider.HTTP_RESPONSE_CODE.NOT_FOUND.DETAIL);
    err.status = contentProvider.HTTP_RESPONSE_CODE.NOT_FOUND.CODE;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(PORT, function(){
    console.log('Servidor rodando localhost:8080');
});

module.exports = app;