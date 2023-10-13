const express         = require('express');
const path            = require('path');
const cookieParser    = require('cookie-parser');
const logger          = require('morgan');
const routes          = require('./routes/index');
const responder       = require('./middleware/responder');
const app             = express();
const cors            = require('cors');

// view engine setup
const originAllowList = [
  "http://localhost:5173",
]
app.use(cors({ origin: originAllowList, credentials: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(responder);

app.use('/api/v1', routes);
app.get('*', function (req, res) { res.render('index', { title: "works"}); } )

// catch 404 and forward to error handler
app.use(function (req, res) { res.json({ status: 'error', code: 404, msg: 'Invalid Request, Not Valid' }); });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  const response = { status: 'error', code: 500, msg: 'Internal error'}
  res.status(err.status || 500);
  res.json(response);
});

module.exports = app;
