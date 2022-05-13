const express = require("express");
const app = express();
const {myExecute}  = require("../helper/corefuncs");

const getselData = async (req,res) => {
    const id = req.params.id;
    const query = `SELECT * FROM users WHERE id=${id}`; 
    try{
        const data = await myExecute(query);
        if(data.length > 0){
            res.status(200).send(data);
        }
        else{
            res.status(404).json({message:'Data not found..!'});
        }
    }
    catch(err){
        res.status(403).send(err);
    }
}

module.exports = getselData;
