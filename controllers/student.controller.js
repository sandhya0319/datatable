const db = require('../models');
const { sequelize } = require('../models');

 const student=db.student;

 const searchdata=async(req,res)=>{
    try {
        let { firstname,lastname, type } = req.params;

        if (!firstname) {
            firstname = "";
        }
        if (!lastname) {
            lastname = "";
        }
        if (!type) {
          type = "";
        }
        const Data = await student.findAll({
            where: {
                [Op.and]: [
                  {
                    nama: {
                      [Op.iLike]: "%" + firstname + "%",
                    },
                  },
                  {
                    lastname: {
                      [Op.iLike]: "%" + lastname + "%",
                    },
                  },
                  {
                    type: {
                      [Op.iLike]: "%" + type + "%",
                    },
                  },
                ],
              }
        });
    
        res.json(Data);
      } catch (error) {
        res.send(error);
      }
    
 }

const displaydata = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Get the requested page number from the query parameters, default to 1 if not provided
      const limit = parseInt(req.query.limit) || 5; // Get the page limit from the query parameters, default to 10 if not provided
  
      const offset = (page - 1) * limit; // Calculate the offset based on the page number and limit
  
      const Data = await student.findAndCountAll({
        offset: offset,
        limit: limit,
        // Add any additional conditions, sorting, or include statements as needed
      });
  
      res.json(Data);
    } catch (error) {
      res.send(error);
    }
  };
  
  module.exports = {
    displaydata,
    searchdata,
  };