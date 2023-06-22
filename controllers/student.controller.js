const db = require('../models');
const { sequelize } = require('../models');
const { Op } = require('sequelize');


const student = db.student;
const enrollment=db.enrollment;
const course=db.course;
const professor=db.professor;
const comment=db.comment;

const searchdata = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    let { search } = req.params;
    // search.split(" ")
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 5; 
    const offset = (page - 1) * limit; 
    let searchData = await enrollment.findAndCountAll({
      include: [
        {
            model: student
        },
        {
            model:course 
        },
      ],
      where: {
        [Op.or]: [
          sequelize.where(
            sequelize.fn('LOWER', sequelize.col('firstname')),
            'LIKE',
            `%${search.toLowerCase()}%`
          ),
          sequelize.where(
            sequelize.fn('LOWER', sequelize.col('lastname')),
            'LIKE',
            `%${search.toLowerCase()}%`
          ),
          sequelize.where(
            sequelize.fn('LOWER', sequelize.col('phone')),
            'LIKE',
            `%${search.toLowerCase()}%`
          ),
        ],
      },
      offset: offset,
      limit: limit,
    });
    res.json(searchData);
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }

}

const displaydata = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit; 

    const Data = await enrollment.findAndCountAll({
      include: [
        {
            model: student,
            attributes:[
              "firstname","lastname","phone"
            ]
        },
        {
            model:course,
            // include: professor,
            attributes:[
              "title"
            ]
        },
      ],
      offset: offset,
      limit: limit,
      // order: [
      //   ['firstname', 'DESC'],
      // ],
      // Add 
      attributes:["id"]});

    res.json(Data);
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
};

const commentdata=async(req,res)=>{
  const t = await db.sequelize.transaction();
  try {
    const studentdata = await student.create({firstname:"Shreya",lastname:"Kanaujia",phone:"9900889900"});

    const professordata = await professor.create({name:"Snehal",qualification:"M-tech",course_id:1});

    if(studentdata && studentdata.id)
    {
        await comment.create({comment:"good",commentid:studentdata.id,commmentype:"student"});
    }
    if(professordata && professordata.id)
    {
        await comment.create({comment:"best",commentid:professordata.id,commmentype:"professor"});
    }

    res.send(studentdata);
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
}

const displaycomments=async(req,res)=>{
  const t = await db.sequelize.transaction();
  try {
    const data=await student.findAll({include:{model:comment}})
    res.send(data);
    await t.commit();
  } catch (error) {
    res.send(error);
    await t.rollback();
  }
}

module.exports = {
  displaydata,
  searchdata,
  commentdata,
  displaycomments,
};