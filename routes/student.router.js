const studentcontroller = require("../controllers/student.controller.js");
const router = require('express').Router();




//const upload = multer({ storage: storage })

//router.post('/addproduct', upload.single('product_img'), productcontroller.addproduct);
//router.post('/addproduct',productcontroller.addproduct);

router.get('/displaydata', studentcontroller.displaydata);

router.get('/searchdata/type/:type?/firstname/:firstname?/lastname/:lastname', studentcontroller.searchdata);

//router.delete('/deleteproduct/:id', productcontroller.deleteproduct);

module.exports = router;