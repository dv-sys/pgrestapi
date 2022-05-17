const Joi = require('joi');
const { redirect } = require("express/lib/response");
const {myExecute}  = require("../helper/corefuncs");

const insertData = async (req,res) => {
    const {id,first_name,last_name,city} = req.body;
    
    /*
    //validations
    const schema = Joi.object({
        first_name: Joi.string().min(3).max(15).required()
    });

    let result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }*/

    const query = `INSERT INTO users (id,first_name,last_name,city) VALUES (${id},'${first_name}','${last_name}','${city}') `;
    //res.json({query:query});
    try{
        const result = await myExecute(query);
        if(result){
            res.status(200).json({message:"Data Inserted Successfully"});    
        }
    }
    catch(err){
        res.status(403).json(err.message);
    }

}

module.exports = insertData;
