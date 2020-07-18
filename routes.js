
const express = require('express');
const routes = express.Router();
const home = require('./controllers/HomeController');
const about = require('./controllers/AboutController');
const recipeshome = require('./controllers/RecipesHomeController');
const details = require('./controllers/DetailsController');

routes.get("/", home.index); // Página Principal
routes.get("/about", about.index); // Sobre
routes.get("/recipes", recipeshome.index); // Listagem de receitas
routes.get("/recipes/:id", details.index); // Detalhes da receita

module.exports = routes;