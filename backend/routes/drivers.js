const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver');

// GET /api/drivers - Get all drivers
router.get('/', async (req, res) => {
  try {
    const drivers = await Driver.find().sort({ position: 1 });
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch drivers' });
  }
});

// GET /api/drivers/:id - Get driver by ID
router.get('/:id', async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) {
      return res.status(404).json({ error: 'Driver not found' });
    }
    res.json(driver);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch driver' });
  }
});

// GET /api/drivers/team/:team - Get drivers by team
router.get('/team/:team', async (req, res) => {
  try {
    const drivers = await Driver.find({ team: req.params.team }).sort({ position: 1 });
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch drivers by team' });
  }
});

// POST /api/drivers - Create new driver
router.post('/', async (req, res) => {
  try {
    const driver = new Driver(req.body);
    await driver.save();
    res.status(201).json(driver);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create driver' });
  }
});

// PUT /api/drivers/:id - Update driver
router.put('/:id', async (req, res) => {
  try {
    const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!driver) {
      return res.status(404).json({ error: 'Driver not found' });
    }
    res.json(driver);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update driver' });
  }
});

// DELETE /api/drivers/:id - Delete driver
router.delete('/:id', async (req, res) => {
  try {
    const driver = await Driver.findByIdAndDelete(req.params.id);
    if (!driver) {
      return res.status(404).json({ error: 'Driver not found' });
    }
    res.json({ message: 'Driver deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete driver' });
  }
});

module.exports = router;
