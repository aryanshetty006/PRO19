const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver');
const Team = require('../models/Team');

// GET /api/standings/drivers - Get driver standings
router.get('/drivers', async (req, res) => {
  try {
    const drivers = await Driver.find().sort({ position: 1 });
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch driver standings' });
  }
});

// GET /api/standings/constructors - Get constructor standings
router.get('/constructors', async (req, res) => {
  try {
    const teams = await Team.find().sort({ position: 1 });
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch constructor standings' });
  }
});

// GET /api/standings - Get both driver and constructor standings
router.get('/', async (req, res) => {
  try {
    const [drivers, constructors] = await Promise.all([
      Driver.find().sort({ position: 1 }),
      Team.find().sort({ position: 1 })
    ]);
    
    res.json({
      drivers,
      constructors
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch standings' });
  }
});

module.exports = router;
