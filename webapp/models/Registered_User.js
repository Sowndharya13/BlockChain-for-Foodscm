'use strict';
module.exports = (sequelize, DataTypes) => {
  var Registered_User = sequelize.define('Registered_User', {
    id : {
      type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    first_name: DataTypes.STRING,
    email:{
      type : DataTypes.STRING,
    	unique : true,
    } ,
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
