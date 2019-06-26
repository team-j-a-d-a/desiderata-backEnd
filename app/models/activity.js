
const mongoose = require('mongoose')

const bucketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  completed: {
    type: Boolean,
    required: true,
    default: false

  },
  // dueDate: {
  //   type: date,
  //   required: false
  // },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Activity', bucketSchema)
