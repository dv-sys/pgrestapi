const {myExecute}  = require("../helper/corefuncs");

const getData = async function(req,res) {
    const query = "SELECT * FROM users";
    try{
        const data = await myExecute(query);
        if(data.length > 0){
            res.status(200).send(data);
        }
        else{
            res.status(404).json({message:'Data not found..!'});
        }
    }
    catch(err){
        res.status(403).send(err);
    }
}
module.exports = getData;
