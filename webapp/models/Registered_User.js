'use strict';
module.exports = (sequelize, DataTypes) => {
  var Registered_User = sequelize.define('Registered_User', {
    first_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: DataTypes.STRING,
    location: DataTypes.STRING,
    role: DataTypes.STRING,
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return Registered_User;
};