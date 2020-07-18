
const express = require('express');
const routes = express.Router();
const home = require('./controllers/HomeController');
const about = require('./controllers/AboutController');
const recipeshome = require('./controllers/RecipesHomeController');
const details = require('./controllers/DetailsController');
const recipes = require('./controllers/RecipesController');

routes.get("/", home.index); // Página Principal
routes.get("/about", about.index); // Sobre
routes.get("/recipes", recipeshome.index); // Listagem de receitas
routes.get("/recipes/:id", details.index); // Detalhes da receita

routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

module.exports = routes;