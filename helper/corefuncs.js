const res = require("express/lib/response");
const client = require("./dbconnection");

async function myExecute(query){
    console.log('Query Fire : ' , query )
    try{
        const result = await client.query(query);
        return result.rows;    
    }
    catch(err){
        throw err;
    }
    client.end
}

module.exports = {myExecute};

/*const myExecute = (req,res) => {
    client.query("SELECT * FROM users", (err,result)=>{
        if(!err){
            res.send(result);
        }
        else{
            res.send(err);
        }
    })
    client.end;    
}
module.exports = myExecute;
*/