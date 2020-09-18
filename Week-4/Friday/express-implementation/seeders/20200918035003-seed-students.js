'use strict';
const fs =require('fs');

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
   const studentsData = [];
   parseData.forEach(data => {
     const {name, major, score} = data;
     studentsData.push({
       name,
       major,
       score,
       createdAt: new Date(),
       updatedAt: new Date(),
     })
   })
   await queryInterface.bulkInsert('Students', studentsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Students', null, {});
  }
};
