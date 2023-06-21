'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students',[{
      firstname:"aditya",
      lastname:"patel",
      phone:7788990066,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname:"aman",
      lastname:"verma",
      phone:9988990066,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students',[{
      firstname:"aditya",
      lastname:"patel",
      phone:7788990066,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname:"aman",
      lastname:"verma",
      phone:9988990066,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ])
    
  }
};
