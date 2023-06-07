// import express
const express = require('express')

// create router for express
const router = new express.Router()

// import controller
const userController = require('../Controller/userController')

// import multer upload configuration
const upload = require('../multerConfig/storageConfig')

// define routes for each http req
router.post('/employee/register',upload.single('user_profile'),userController.register)

// define route for get all users
router.get('/employee/get-all-employee-details',userController.getusers)

// define route to view profile
router.get('/employee/view-profile/:id',userController.viewprofile)

// define route to dlete user
router.delete('/employee/delete-user/:id',userController.deleteUser)

// define route to define update
router.put('/employee/update/:id',upload.single('user_profile'),userController.editUser)

// export router
module.exports = router