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
   const parseData = JSON.parse(fs.readFileSync('./data.json'))
   const tasksData = [];
   parseData.forEach(data =>{
     const {task, status, tag} = data;
     tasksData.push({
       task, 
       status, 
       tag,
       createdAt: new Date(),
       completedAt: new Date(),
     })
   }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
