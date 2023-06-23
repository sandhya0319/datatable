const db = require("../models");
const { sequelize } = require("../models");
const { Op } = require("sequelize");

const student = db.student;
const enrollment = db.enrollment;
const course = db.course;
const professor = db.professor;
const comment = db.comment;

const searchdata = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    let { search } = req.params;
    // search.split(" ")
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    const searchTerms = search.split(" ");

    const searchData = await student.findAll({
      include: [
        {
          model: enrollment,
          include: [
            {
              model: course,
              include: {
                model: professor,
              },
            },
          ],
        },
      ],
      where: {
        [Op.and]: searchTerms.map((term) => ({
          [Op.or]: [
            sequelize.where(
              sequelize.fn("LOWER", sequelize.col("firstname")),
              "LIKE",
              `%${term.toLowerCase()}%`
            ),
            sequelize.where(
              sequelize.fn("LOWER", sequelize.col("lastname")),
              "LIKE",
              `%${term.toLowerCase()}%`
            ),
            sequelize.where(
              sequelize.fn("LOWER", sequelize.col("phone")),
              "LIKE",
              `%${term.toLowerCase()}%`
            ),
          ],
        })),
      },
      offset: offset,
      limit: limit,
    });
    const totalcount = await student.count();
    res.json({ searchData, totalcount });
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};

const displaydata = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    const Data = await student.findAll({
      include: [
        {
          model: enrollment,
          include: [
            {
              model: course,
              include: {
                model: professor,
              },
            },
          ],
        },
      ],
      offset: offset,
      limit: limit,
    });
    const totalcount = await student.count();
    res.json({ Data, totalcount });
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};

const handleSort = async (req, res) => {
  try {
    const { column, sortDirection } = req.query;
    let { page, limit } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 5;
    const offset = (page - 1) * limit;
    const sortingColumn = column === "id" ? "id" : column;
    const orderOption = column && sortDirection ? [[sortingColumn, sortDirection]] : [];
    const searchData = await student.findAll({
      include: [
        {
          model: enrollment,
          include: [
            {
              model: course,
              include: {
                model: professor,
              },
            },
          ],
        },
      ],
      offset: offset,
      limit: limit,
      order: orderOption,
    });
    const totalcount = await student.count();
    res.json({searchData,totalcount});
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const commentdata = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const studentdata = await student.create({
      firstname: "Shreya",
      lastname: "Kanaujia",
      phone: "9900889900",
    });

    const professordata = await professor.create({
      name: "Snehal",
      qualification: "M-tech",
      course_id: 1,
    });

    if (studentdata && studentdata.id) {
      await comment.create({
        comment: "good",
        commentid: studentdata.id,
        commmentype: "student",
      });
    }
    if (professordata && professordata.id) {
      await comment.create({
        comment: "best",
        commentid: professordata.id,
        commmentype: "professor",
      });
    }

    res.send(studentdata);
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};

const displaycomments = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const data = await student.findAll({ include: { model: comment } });
    res.send(data);
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};

module.exports = {
  displaydata,
  searchdata,
  commentdata,
  displaycomments,
  handleSort,
};
