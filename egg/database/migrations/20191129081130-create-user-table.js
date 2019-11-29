'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTERGER, DATE, STRING} = Sequelize
    await queryInterface.createTable('users', {
      id: {
        type: INTERGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: STRING(255),
        allowNull: false
      },
      email: {
        type: STRING(255),
        allowNull: false
      },
      password: {
        type: STRING(255),
        allowNull: false
      },
      avatar_url: STRING(255),
      mobile: STRING(32),
      prefix: STRING(32),
      abstract: {
        type: STRING(255),
        allowNull: true
      },
      sex: {
        type: INTERGER,
        defaultValue: 0
      },
      created_at: DATE,
      updated_at: DATE
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
