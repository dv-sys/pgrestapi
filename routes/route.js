const express = require('express');
const router     = express.Router();
const ejs = require('ejs');
const getData     = require('../controllers/getdataapi');
const getselData  = require('../controllers/getseldataapi');
const insertData  = require('../controllers/insertdataapi');
const updateData  = require('../controllers/updatedataapi');
const deleteData  = require('../controllers/deletedataapi');
const auth        = require('../middleware/auth');
const app = require('../app');

router.use( function( req, res, next ) {
    if ( req.query._method == 'DELETE' ) {
        req.method = 'DELETE';
        req.url = req.path;
    }
    if ( req.query._method == 'PUT' ) {
        req.method = 'PUT';
        req.url = req.path;
    }        
    next(); 
});

router.get('/',async (req,res)=>{
    console.log('Err : ' , req.query.err);
    var data = '';
    if(req.query.err == 'invalid'){
        console.log('Test');
        data = "Invalid Username or Password..!";
    }
    res.render('../view/login',{data:data});
});

router.post('/home',auth,async (req,res)=>{
    const data = await getData();
    res.render('../view/home',{data:data});
});

router.get('/listalluser',async (req,res)=>{
    const data = await getData();
    res.render('../view/home',{data:data});
});

router.get('/adduser',async (req,res)=>{
    res.render('../view/adduser');
});

router.post('/addusersave',async (req,res,next)=>{
    const result = await insertData(req,res,next); 
    res.redirect('/listalluser');
});

router.get('/edituser/:id',async (req,res)=>{
    const data = await getselData(req,res);
    res.render('../view/edituser',{data:data});
});

router.put('/editusersave/',async (req,res)=>{
    const result = await updateData(req,res);
    res.redirect('/listalluser');
});

router.delete('/deleteuser/:id',async (req,res) =>{
    const result = await deleteData(req,res);
    res.redirect('/listalluser');
});

router.get('/listusers',  getData)

router.get('/listseluser/:id',getselData);
router.post('/adduser',insertData);
router.put('/updateuser',updateData);

module.exports = router;