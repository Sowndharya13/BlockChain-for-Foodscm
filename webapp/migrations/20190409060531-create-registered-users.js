'use strict';
module.exports = {
  up: (registeredUsers, Sequelize) => {
    return registeredUsers.createTable('', {
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      pwd_repeat:{
        type: Sequelize.STRING
      }
    });
  },
  down: (registeredUsers, Sequelize) => {
    return registeredUsers.dropTable('');
  }
};
