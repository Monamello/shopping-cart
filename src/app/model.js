import Sequelize, { Model, DataTypes } from 'sequelize';

class Cart extends Model {
    static init(sequelize){
        super.init({
            total: Sequelize.FLOAT,
            subtotal: Sequelize.FLOAT,
            item: Sequelize.INTEGER,
            ticket: Sequelize.JSON,
            products: Sequelize.ARRAY(DataTypes.JSON),
          },
          {
            sequelize,
            timestamps: false
          }
        );
      return this;
    }
}

export default Cart;