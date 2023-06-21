const express = require('express')
const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors')

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(cors())

dotenv.config();

// app.use(express.static('public'));
// app.use('/images', express.static(`${__dirname}/public/images`));


const studentrouter = require('./routes/student.router.js')
app.use('/student', studentrouter);

//test api
app.get('/', (req, res) => {
    res.json({ message: 'hello' })
})
const { API_PORT } = process.env;

const port = process.env.PORT || API_PORT;
//const port=process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Server listen at port ${port}`)
})