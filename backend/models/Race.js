const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  circuit: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  round: {
    type: Number,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['upcoming', 'completed', 'cancelled'],
    default: 'upcoming'
  },
  winner: {
    type: String,
    default: null
  },
  polePosition: {
    type: String,
    default: null
  },
  fastestLap: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Race', raceSchema);
