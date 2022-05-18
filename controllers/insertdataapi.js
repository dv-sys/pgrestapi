const { redirect } = require("express/lib/response");
const {myExecute}  = require("../helper/corefuncs");
const express = require('express');
const bcrypt = require('bcryptjs');

const insertData = async (req,res) => {
    //console.log(req.body);
    const {first_name,last_name,email,city,password} = req.body;
    const cq = "SELECT id FROM users ORDER BY id desc LIMIT 1";
    const idres = await myExecute(cq);
    const maxid = idres[0].id + 1;
    encpass = await bcrypt.hash(password, 10); 
    const query = `INSERT INTO users (id,first_name,last_name,city,email,password) VALUES (${maxid},'${first_name}','${last_name}','${city}','${email}','${encpass}') `;
    //res.json({query:query});
    try{
        const result = await myExecute(query);
        if(result){
            return "Data Inserted Successfully";
            //res.status(200).json({message:"Data Inserted Successfully"});    
        }
    }
    catch(err){
        throw err.message;
        //res.status(403).json(err.message);
    }
}

module.exports = insertData;
