const studentcontroller = require("../controllers/student.controller.js");
const router = require('express').Router();

router.get('/displaydata', studentcontroller.displaydata);
router.get('/searchdata/:search', studentcontroller.searchdata);
router.post('/commentdata', studentcontroller.commentdata);
router.get('/displaycomments',studentcontroller.displaycomments);
module.exports = router;