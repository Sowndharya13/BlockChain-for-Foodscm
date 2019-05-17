'use strict';
module.exports = (sequelize, DataTypes) => {
  const registeredUser = sequelize.define('registeredUser', {
    email: DataTypes.STRING,
    
  });
  registeredUser.associate = function(models) {
    // associations can be defined here
  };
  return registeredUser;
};