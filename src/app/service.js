import Cart from './model';


class CartService {

    async create(body) {
        return await Cart.create(body);
    }

    async list() {
        return await Cart.findAll();
    }

    async listById(id) {
        return await Cart.findByPk(id);
    }

    async update(id, body) {
        return await Cart.update(body, {where: {id}});
    }

    async delete(id) {
        return await Cart.destroy({where: {id}});
    }

}


export default new CartService();