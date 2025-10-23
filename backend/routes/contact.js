const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });
    
    await contact.save();
    
    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      id: contact._id
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// GET /api/contact - Get all contact messages (admin only)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact messages' });
  }
});

// GET /api/contact/:id - Get specific contact message
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact message not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact message' });
  }
});

// PUT /api/contact/:id - Update contact message status
router.put('/:id', async (req, res) => {
  try {
    const { status, response } = req.body;
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, response },
      { new: true }
    );
    
    if (!contact) {
      return res.status(404).json({ error: 'Contact message not found' });
    }
    
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact message' });
  }
});

// DELETE /api/contact/:id - Delete contact message
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact message not found' });
    }
    res.json({ message: 'Contact message deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact message' });
  }
});

module.exports = router;
