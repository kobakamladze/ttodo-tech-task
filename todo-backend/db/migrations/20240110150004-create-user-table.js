"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("User", {
      id: { type: Sequelize.DataTypes.INTEGER, autoIncrement: true },
      email: Sequelize.DataTypes.STRING,
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable("User");
  },
};
