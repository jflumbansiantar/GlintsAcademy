'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const parseData = JSON.parse(fs.readFileSync('./data.json'));
   const todoData = [];
   parseData.forEach(data => {
     const {task, status} = data;
     todoData.push({
      task,
      status,
      createdAt: new Date(),
      updatedAt : new Date(),
     })
   })
   await queryInterface.bulkInsert('ToDoLists', todoData, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ToDoLists', null, {});
    }
};
