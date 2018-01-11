var express = require('express');
var path = require('path');
var router = express.Router();
var expressVue = require('express-vue');

var app = express();
var server = app.listen(8080);

const vueOptions = {
    rootPath: path.join(__dirname, '/views'),
    layout: {
        start: '<div id="app">',
        end: '</div>'
    }
};
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);
console.log('ちん！ちん！K.O.');


// router.get('/', (req, res, next) => {
app.use('/', (req, res, next) => {
  console.log('ぱい!ぱい!');
    const data = {
        otherData: '人類の大きな一歩'
    };
    const vueOptions = {
        head: {
            title: 'Page Title',
            meta: [
                { property:'og:title', content: 'Page Title'},
                { name:'twitter:title', content: 'Page Title'},
            ]
        }
    }
    res.renderVue('main', data, vueOptions);
})
