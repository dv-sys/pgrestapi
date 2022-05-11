const client = require("./connection.js");

const deleteData = (req,res) => {
    const  id = req.params.id;
    const delQ = `DELETE FROM users WHERE id=${id}`;
    client.query(delQ, (err,result)=>{
        if(!err){
            res.json({message:"Data Deleted successfully"});
        }
        else{
            res.json({message:"Data not Deleted..!"});
        }
    })
    client.end;  
}

module.exports = deleteData;