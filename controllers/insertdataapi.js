const client = require("./connection.js");

const insertData = (req,res) => {
    
    const {id,first_name,last_name,city} = req.body;
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
