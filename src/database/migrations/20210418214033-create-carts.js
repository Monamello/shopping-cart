'use strict';
const {DataTypes} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      subtotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      item: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ticket: {
        type:  Sequelize.ARRAY(DataTypes.JSON),
        allowNull: true,
      },
      products: {
        type:  Sequelize.ARRAY(DataTypes.JSON),
        allowNull: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('carts');
  }
};
