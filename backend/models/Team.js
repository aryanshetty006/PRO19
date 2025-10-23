const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  constructor: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  drivers: [{
    type: String,
    required: true
  }],
  points: {
    type: Number,
    default: 0
  },
  position: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  wins: {
    type: Number,
    default: 0
  },
  podiums: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);
