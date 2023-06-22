'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('course_students',[{
      course_id:1,
      student_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      course_id:1,
      student_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      course_id:2,
      student_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('course_students',[{
      course_id:1,
      student_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      course_id:1,
      student_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      course_id:2,
      student_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  }
};
