const express = require('express');
const router     = express.Router();
const getData    = require('../controllers/getdataapi');
const getselData = require('../controllers/getseldataapi');
const insertData = require('../controllers/insertdataapi');
const updateData = require('../controllers/updatedataapi');
const deleteData = require('../controllers/deletedataapi');
const login = require('../controllers/login');
const auth  = require('../middleware/auth');
const {updatevalid} = require('../middleware/validations');

router.post('/',login);
router.get('/listusers',getData);
router.get('/listseluser/:id',getselData);
router.post('/adduser',auth,insertData);
router.put('/updateuser',[updatevalid,auth],updateData);
router.delete('/deleteuser/:id',auth,deleteData);

module.exports = router;