const client = require("./connection.js");
const express = require("express");
const app = express();

const getData = (req,res) => {
    client.query("SELECT * FROM users", (err,result)=>{
        if(!err){
            res.send(result.rows);
        }
        else{
            res.json({message:"Data not Found..!"});
        }
    })
    client.end;    
}

module.exports = getData;
