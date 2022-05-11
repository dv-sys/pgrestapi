const express = require('express');
const router     = express.Router();
const getData    = require('../controllers/getdataapi');
const getselData    = require('../controllers/getseldataapi');
const insertData = require('../controllers/insertdataapi');
const updateData = require('../controllers/updatedataapi');
const deleteData = require('../controllers/deletedataapi');

router.get('/listusers',getData);
router.get('/listseluser/:id',getselData);
router.post('/adduser',insertData);
router.put('/updateuser',updateData);
router.delete('/deleteuser/:id',deleteData);

module.exports = router;