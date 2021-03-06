import { Router } from "express";
import { route } from "express/lib/router";

import helloController from "./controllers/helloController";
import UsersController from "./controllers/UsersController";

const routes = new Router();

routes.get ('/hello', helloController.index);

// RESTFull - Formato de conversar com as coisas.
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);


export default routes;