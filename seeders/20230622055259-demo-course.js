'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses',[{
      title:"Python",
      description:"Trending programming language",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Machine Learning",
      description:"based on data science Trending programming language",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses',[{
      title:"Python",
      description:"Trending programming language",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Machine Learning",
      description:"based on data science Trending programming language",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  }
};
