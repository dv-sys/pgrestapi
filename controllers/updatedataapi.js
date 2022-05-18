const {myExecute}  = require("../helper/corefuncs");

const updateData = async (req,res,next) => {
    
    const {id,first_name,last_name,email,city} = req.body;
    const query = `UPDATE users SET first_name='${first_name}',last_name='${last_name}',city='${city}',email='${email}'  
                  WHERE id=${id}`; 
    try{
        const result = await myExecute(query);
        if(result){
            return {message:"Data Updated Successfully"};
            //res.status(200).json({message:"Data Updated Successfully"});    
        }
    }
    catch(err){
<<<<<<< HEAD
        throw err.message;
        //res.status(403).json(err.message);
=======
        res.status(403).json(err.message);
>>>>>>> 46f40f66a0ebd3e78ca61fd903cb95c3507cd84b
    } 
}

module.exports = updateData;
