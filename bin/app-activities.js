'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mongoose-crud', {
  useMongoClient: true
})
const db = mongoose.connection

const Activity = require('../models/activity.js')

const done = function () { // eslint-disable-line no-unused-vars
  db.close()
}

// Create
const create = function (title, description, completed, owner) {
  /* Add Code Here */
  const activityParams = {
    title,
    description,
    completed
  }
  Activity.create(activityParams)
    .populate('bucketTest') // populating with bucketTest for testing purposes while building
    .then(console.log)
    .catch(console.error)
    .then(done)
}

// Index
const index = function () {
  Activity.find()
    .populate('visitor')
    .then(activities => {
      activities.forEach(function (activity) {
        console.log(activity.toJSON)
      })
    })
    .catch(console.error)
    .then(done)
}

// Show
const show = function (id) {
  Activity.findById(id)
    .populate('bucketTestShow') // populating with bucketTestShow for testing purposes while building
    .then(activity => console.log(activity.toJSON()))
    .catch(console.error)
    .then(done)
}

// Update
const update = function (id, field, value) {
  Activity.findById(id)
    .populate('bucketUpdate') // populating with bucketUpdate for testing purposes while building
    .then(activity => {
      activity[field] = value
      return activity.save()
    })
    .then(console.log)
    .catch(console.error)
    .then(done)
}

// Destroy
const destroy = function (id) {
  Activity.findById(id)
    .then(activity => {
      return activity.remove()
    })
    .then(console.log)
    .catch(console.error)
    .then(done)
}

// UI
db.once('open', function () {
  const command = process.argv[2]

  let field
  let id

  switch (command) {
    case 'create':
      const title = process.argv[3]
      const description = process.argv[4]
      const completed = process.argv[5]

      create(title, description, completed)

      break

    case 'show':
      id = process.argv[3]
      show(id)
      break

    case 'update':
      id = process.argv[3]
      field = process.argv[4]
      const value = process.argv[5]
      update(id, field, value)
      break

    case 'destroy':
      id = process.argv[3]
      destroy(id)
      break

    default:
      index()
      break
  }
})
