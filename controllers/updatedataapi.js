const client = require("./connection.js");

const updateData = (req,res) => {
    
    const {id,first_name,last_name,city} = req.body;
    const updQ = `UPDATE users SET first_name='${first_name}',last_name='${last_name}',city='${city}'
                  WHERE id=${id}`;
    //res.json({query:insQ}); 
    client.query(updQ, (err,result)=>{
        if(!err){
            res.json({message:"Data Updated successfully"});
        }
        else{
            res.json({message:"Data not Updated..!"});
        }
    })
    client.end;  
}

module.exports = updateData;
