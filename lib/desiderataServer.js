
const express = require('express')
const bodyParser = require('body-parser')
const activities = require('mongoose')

const app = express()

// use the body-parser middleware
app.use(bodyParser.json())

// GET ALL (index)
// get method to return all activities
app.get('/activities', (req, res) => {
  // Set our status code to 200 and then send our request with the activities as JSON
  res.status(200).json({ activities }) // response send status of 200
})

// POST (create)
app.post('/activities/', (req, res) => {
  // bodyParser creates body property for dotting into
  // get the activity data from the req.body.
  const activity = req.body.activity
  activities.push(activity)
  // Set our status code to 201 and then send our request with the created activity as JSON
  res.status(201).json({ activity })
})

// start server and listen for requests
app.listen(4741, () => console.log('Example app listening on port 4741!'))
