"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Todo", {
      id: { type: Sequelize.DataTypes.INTEGER, autoIncrement: true },
      title: { type: Sequelize.DataTypes.STRING, allowNull: false },
      description: Sequelize.DataTypes.STRING,
      status: { type: Sequelize.DataTypes.STRING, allowNull: false },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable("Todo");
  },
};
