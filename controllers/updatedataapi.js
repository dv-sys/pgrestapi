const {myExecute}  = require("../helper/corefuncs");

const updateData = async (req,res) => {
    
    const {id,first_name,last_name,city} = req.body;
    const query = `UPDATE users SET first_name='${first_name}',last_name='${last_name}',city='${city}'
                  WHERE id=${id}`;
    
    try{
        const result = await myExecute(query);
        if(result){
            res.status(200).json({message:"Data Updated Successfully"});    
        }
    }
    catch(err){
        res.status(403).json(err);
    } 
}

module.exports = updateData;
