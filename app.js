var express = require('express');
var path = require('path');
var router = express.Router();
var expressVue = require('express-vue');

var app = express();
var server = app.listen(8080, ()=> {
  console.log('Server running at port: ' + server.address().port)
});

const vueOptions = {
    rootPath: path.join(__dirname, '/views'),
    layout: {
        start: '<div id="app">',
        end: '</div>'
    }
};
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

var index = require('./routes/index');
app.use('/', index);
