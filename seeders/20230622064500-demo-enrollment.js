"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("enrollments", [
      {
        course_id: 1,
        student_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 1,
        student_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("enrollments", [
      {
        course_id: 1,
        student_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 1,
        student_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_id: 2,
        student_id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
