const express = require('express');
const nunjunks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjunks.configure('views', {
    express: server
});

server.get('/', function (req, res) {
    return res.render('index');
});

server.get('/about', function (req, res) {
    return res.render('about');
});

server.get('/recipes', function (req, res) {
    return res.render('recipes');
});

server.listen(5001);