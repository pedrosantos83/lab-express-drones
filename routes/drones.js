const express = require('express');

const Drone = require('../models/Drone.model');
// require the Drone model here

const router = express.Router();

router.get('/drones', async (req, res) => {
  // Iteration #2: List the drones
  // ... your code here
  const dronesFromDB = await Drone.find();
  res.render('drones/list', { dronesFromDB });
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/create-form');
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
    const { name, propellers, maxSpeed} = req.body;
    await Drone.create({ name, propellers, maxSpeed });
    res.redirect('/drones');
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone 
   const droneId = req.params.droneId;
    const drone = await Drone.findById(req.params.droneId);
    res.render('drones/update-form', { drone });
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const droneId = req.params.droneId
    const {  name, propellers, maxSpeed } = req.body;
   await Drone.findByIdAndUpdate(droneId, {
        name,
        propellers,
        maxSpeed
    });

    res.redirect(`/drones`);
  } catch (e) {
    console.log(e)
  }

});

router.post('/drones/:droneId/delete', async(req, res, next) => {
  // Iteration #5: Delete the drone
 
    const droneId = req.params.droneId
    await Drone.findByIdAndDelete(droneId)
    res.redirect('/drones')
});

module.exports = router;
