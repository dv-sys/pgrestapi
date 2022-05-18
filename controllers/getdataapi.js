const {myExecute}  = require("../helper/corefuncs");

const getData = async function(req,res) {
    const query = "SELECT * FROM users ORDER BY id DESC";
    try{
        const data = await myExecute(query);
        if(data.length > 0){
            return data;
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
module.exports = getData;
