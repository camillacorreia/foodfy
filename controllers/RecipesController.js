const fs = require('fs');
const data = require('../data.json');

// index
exports.index = function(req, res) {
    return res.render("admin/index", { recipes: data.recipes });
};

// create
exports.create = function (req, res) {
    return res.render("admin/create");
};

// show
exports.show = function (req, res) {
    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(recipe) {
      return id == recipe.id;
    });

    if (!foundRecipe) return res.send("Receita não encontrada!");

    return res.render("admin/show", { recipe: foundRecipe });
}

//edit
exports.edit = function (req, res) {
    const { id } = req.params;

    const foundRecipe = data.recipes.find(function(recipe) {
      return id == recipe.id;
    });

    if (!foundRecipe) return res.send("Receita não encontrada!");

    return res.render("admin/edit", { recipe: foundRecipe });
};