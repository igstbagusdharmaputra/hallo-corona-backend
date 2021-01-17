"use strict";
module.exports = (sequelize, DataTypes) => {
  const consultation = sequelize.define(
    "consultation",
    {
      fullName: DataTypes.STRING,
      phone: DataTypes.STRING,
      bornDate: DataTypes.STRING,
      age: DataTypes.STRING,
      height: DataTypes.STRING,
      weight: DataTypes.STRING,
      gender: DataTypes.STRING,
      subject: DataTypes.STRING,
      liveConsul: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      dokterId: DataTypes.INTEGER
    },
    {}
  );
  consultation.associate = function(models) {
    consultation.belongsTo(models.user);
    consultation.hasOne(models.reply);
  };
  return consultation;
};
