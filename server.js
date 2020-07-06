const express = require('express');
const nunjunks = require('nunjucks');

const recipes = require('./data'); 

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjunks.configure('views', {
    express: server,
    noCache: true
});

server.get('/', (req, res) => {
    return res.render('index', {recipes})
});

server.get('/about', function (req, res) {
    return res.render('about');
});

server.get('/recipes', (req, res) => {
    return res.render('recipes', {recipes})
});

server.get('/recipes/:index', (req, res) => {
    const index = req.params.index;
    const recipe = recipes[index];
    return res.render('details', {recipe});
});

server.listen(5001);