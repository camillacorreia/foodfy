const fs = require('fs');
const data = require('../data.json');

// index
exports.index = function(req, res) {
    return res.render("index/about", { recipes: data.recipes });
};