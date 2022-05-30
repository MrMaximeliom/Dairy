'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return [ queryInterface.addColumn(
      'users',
      'last_name',
       Sequelize.STRING
     )],
     [ queryInterface.addColumn(
      'users',
      'password',
       Sequelize.STRING
     )]
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
