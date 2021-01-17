"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("consultations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      bornDate: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      liveConsul: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(2000)
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "Waiting Approve Consultation Live"
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
      dokterId: {
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
    return queryInterface.dropTable("consultations");
  }
};
