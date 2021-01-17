"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      fullName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    user.hasMany(models.consultation);
    user.hasMany(models.article);
  };
  return user;
};
