const fs = require('fs');
const data = require('../data.json');

// index
exports.index = function(req, res) {
    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(recipe) {
      return id == recipe.id;
    });

    if (!foundRecipe) return res.send("Receita não encontrada!");

    return res.render("index/details", { recipe: foundRecipe });
};