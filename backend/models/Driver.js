const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true,
    unique: true
  },
  team: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 0
  },
  position: {
    type: Number,
    required: true
  },
  wins: {
    type: Number,
    default: 0
  },
  podiums: {
    type: Number,
    default: 0
  },
  photo: {
    type: String,
    default: "👨‍💼"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Driver', driverSchema);
