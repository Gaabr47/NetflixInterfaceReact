const {Router} = require('express');
const routes = Router();
const AuthController = require('./app/controller/AuthController')


routes.get('/users', AuthController.index);
routes.post('/users', AuthController.create);
routes.post('/users/login', AuthController.show);

module.exports = routes;