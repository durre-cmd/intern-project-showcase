const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Create project
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    if (!title || !description) return res.status(400).json({ error: 'Title and description required' });

    const newProject = new Project({
      title,
      description,
      tags: tags ? tags.split(',') : [],
      image: req.file ? req.file.filename : null,
      owner: req.user.id
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while uploading project' });
  }
});

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate('owner', 'username').sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching projects' });
  }
});

module.exports = router;
