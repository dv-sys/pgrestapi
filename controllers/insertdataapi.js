const client = require("./connection.js");
const Joi = require('joi');

const insertData = (req,res) => {
    const {id,first_name,last_name,city} = req.body;
    
    const schema = Joi.object({
        first_name: Joi.string().min(3).max(15).required()
    });

    let result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const insQ = `INSERT INTO users (id,first_name,last_name,city) VALUES 
                (${id},'${first_name}','${last_name}','${city}') `;
    //res.json({query:insQ});
    client.query(insQ, (err,result)=>{
        if(!err){
            res.json({message:"Data Inserted successfully"});
        }
        else{
            res.json({message:"Data not Inserted..!"});
        }
    })
    client.end;  
}

module.exports = insertData;
