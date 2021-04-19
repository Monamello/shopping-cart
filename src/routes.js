import { Router } from 'express';
import CartController from './app/controller'

const routes = new Router();

routes.post('/carts', CartController.store);

routes.get('/carts', CartController.list);

routes.put('/carts/:id', CartController.update);

routes.delete('/carts/:id', CartController.delete);

export default routes;