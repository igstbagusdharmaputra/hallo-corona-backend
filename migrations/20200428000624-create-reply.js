'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('replies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reply: {
        type: Sequelize.STRING(2000)
      },
      consultationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "consultations",
          key: "id"
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT"
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('replies');
  }
};