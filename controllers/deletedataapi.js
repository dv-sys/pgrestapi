const {myExecute}  = require("../helper/corefuncs");

const deleteData = async (req,res) => {
    const  id = req.params.id;
    const query = `DELETE FROM users WHERE id=${id}`;
    try{
        const result = await myExecute(query);
        if(result){
            return "Data Deleted Successfully";
            //res.status(200).json({message:"Data Deleted Successfully"});    
        }
    }
    catch(err){
        //res.status(403).json(err);
        throw err.message;
    } 
}

module.exports = deleteData;