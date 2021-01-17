"use strict";
module.exports = (sequelize, DataTypes) => {
  const reply = sequelize.define(
    "reply",
    {
      reply: DataTypes.STRING,
      consultationId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {}
  );
  reply.associate = function(models) {
    reply.belongsTo(models.consultation);
  };
  return reply;
};