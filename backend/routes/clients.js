// routes/clients.js
const express = require('express');
const router = express.Router();
const Client = require('../models/client');

// Get all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific client
// router.get('/:id', getClient, (req, res) => {
//   res.json(res.client);
// });

// Create a client
router.post('/', async (req, res) => {
  const client = new Client({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    project: req.body.project
  });

  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a client
// router.patch('/:id', getClient, async (req, res) => {
//   if (req.body.name != null) {
//     res.client.name = req.body.name;
//   }
//   if (req.body.lastName != null) {
//     res.client.lastName = req.body.lastName;
//   }
//   if (req.body.email != null) {
//     res.client.email = req.body.email;
//   }
//   if (req.body.mobileNo != null) {
//     res.client.mobileNo = req.body.mobileNo;
//   }
//   if (req.body.project != null) {
//     res.client.project = req.body.project;
//   }

//   try {
//     const updatedClient = await res.client.save();
//     res.json(updatedClient);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Delete a client
// router.delete('/:id', getClient, async (req, res) => {
//   try {
//     await res.client.remove();
//     res.json({ message: 'Client deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// async function getClient(req, res, next) {
//   let client;
//   try {
//     client = await Client.findById(req.params.id);
//     if (client == null) {
//       return res.status(404).json({ message: 'Client not found' });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }

//   res.client = client;
//   next();
// }

module.exports = router;
