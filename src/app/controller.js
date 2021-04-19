import CartSchema from './schema';
import CartService from './service';

class CartController {
    async store(req, res) {
        const {value: validatedBody, error: schemaError} = CartSchema.validate(req.body);

        if (schemaError) {
          return res.status(400).json({ error: schemaError.message});
        }

        const cart = await CartService.create(validatedBody);
        return res.json(cart);
    }

    async list(req, res){
      const cart = await CartService.list();
      return res.json(cart);
    }

    async update(req, res){
      const { id } = req.params;
      const {value: validatedBody, error: schemaError} = CartSchema.validate(req.body);
      const exists = await CartService.listById(id);

      if (schemaError) {
        return res.status(400).json({ error: schemaError.message});
      }
      if (!exists) {
        return res.status(400).json({ error: 'Cart does not exist.'});
      }

      const cart = await CartService.update(id, validatedBody);
      return res.json(cart);
    }

    async delete(req, res){
      const { id } = req.params;
      const exists = await CartService.listById(id);

      if (!exists) {
        return res.status(400).json({ error: 'Cart does not exist.'});
      }

      await CartService.delete(id);
      return res.status(204).send();
    }
}

export default new CartController();