const express = require('express');
const router = express.Router();
const Race = require('../models/Race');

// GET /api/races - Get all races
router.get('/', async (req, res) => {
  try {
    const races = await Race.find().sort({ round: 1 });
    res.json(races);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch races' });
  }
});

// GET /api/races/:id - Get race by ID
router.get('/:id', async (req, res) => {
  try {
    const race = await Race.findById(req.params.id);
    if (!race) {
      return res.status(404).json({ error: 'Race not found' });
    }
    res.json(race);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch race' });
  }
});

// GET /api/races/status/:status - Get races by status
router.get('/status/:status', async (req, res) => {
  try {
    const races = await Race.find({ status: req.params.status }).sort({ round: 1 });
    res.json(races);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch races by status' });
  }
});

// GET /api/races/upcoming - Get upcoming races
router.get('/upcoming', async (req, res) => {
  try {
    const races = await Race.find({ 
      status: 'upcoming',
      date: { $gte: new Date() }
    }).sort({ date: 1 });
    res.json(races);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch upcoming races' });
  }
});

// POST /api/races - Create new race
router.post('/', async (req, res) => {
  try {
    const race = new Race(req.body);
    await race.save();
    res.status(201).json(race);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create race' });
  }
});

// PUT /api/races/:id - Update race
router.put('/:id', async (req, res) => {
  try {
    const race = await Race.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!race) {
      return res.status(404).json({ error: 'Race not found' });
    }
    res.json(race);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update race' });
  }
});

// DELETE /api/races/:id - Delete race
router.delete('/:id', async (req, res) => {
  try {
    const race = await Race.findByIdAndDelete(req.params.id);
    if (!race) {
      return res.status(404).json({ error: 'Race not found' });
    }
    res.json({ message: 'Race deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete race' });
  }
});

module.exports = router;
