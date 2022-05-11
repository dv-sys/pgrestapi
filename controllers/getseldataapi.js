const client = require("./connection.js");
const express = require("express");
const app = express();

const getselData = (req,res) => {
    const id = req.params.id;
    client.query(`SELECT * FROM users WHERE id=${id}`, (err,result)=>{
        if(!err){
            res.send(result.rows);
        }
        else{
            res.json({message:"Data not Found..!"});
        }
    })
    client.end;    
}

module.exports = getselData;
