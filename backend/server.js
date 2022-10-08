const express = require('express')
const dotenv = require('dotenv').config()
const port= process.env.Port || 5000
 
const app = express()

app.use('/api/goals', require('../backend/routes/goalRoutes'))

app.listen(port, () => console.log("Server started on port "+ port))