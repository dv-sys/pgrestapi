const express = require("express");
const app = express();
const {myExecute}  = require("../helper/corefuncs");

const getselData = async (req,res) => {
    const id = req.params.id;
   
    const query = `SELECT * FROM users WHERE id=${id}`; 
    try{
        const data = await myExecute(query);
        if(data.length > 0){
            return data[0];
            //res.status(200).json(data);
        }
        else{
            return {message:'Data not found..!'};
            //res.status(404).json({message:'Data not found..!'});
        }
    }
    catch(err){
        res.status(403).json(err);
    }
}

module.exports = getselData;
