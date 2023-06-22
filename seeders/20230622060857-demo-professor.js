'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('professors',[{
      name:"sandhya",
      qualification:"Mca",
      course_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Tani",
      qualification:"M-Tech",
      course_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('professors',[{
      name:"sandhya",
      qualification:"Mca",
      course_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:"Tani",
      qualification:"M-Tech",
      course_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  }
};
