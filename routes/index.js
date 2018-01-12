var express = require('express');

var app = express();
var router = express.Router();

router.get('/', (req, res, next) => {
    const data = {
        message: '人類の大きな一歩'
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

module.exports = router;
