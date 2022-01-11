const express = require('express');
const session = require('express-session');
const app = express()
require('dotenv').config()
const port = process.env.PORT;
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

const con = require('./config/db');
var cors = require('cors')


app.use(cors({
  origin : [ "http://localhost:3000"],
  methods : ["GET" , "POST" , "PUT" , "DELETE"],
  credential : true

}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Used to parse JSON bodies
// app.use(express.urlencoded());
app.use(cookieParser());
app.use(session({
  key : "id",
  secret:"secretchebaka",
  resave: false,
   saveUninitialized: false,
   cookie : {
     expires : 60 *60 * 24,
   },
}) )

const companyRoutes = require('./routes/company.routes');
const employeeRoutes = require('./routes/employee.routes');
const departmentRoutes = require('./routes/department.routes');

 //Database


app.use('/',companyRoutes)
app.use('/',employeeRoutes)
app.use('/',departmentRoutes)







app.listen(port, (req, res) => {
  console.log(`listning on ${port} `);
});
