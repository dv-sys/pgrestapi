const res = require("express/lib/response");
const client = require("./dbconnection");

async function myExecute(query){
    console.log('Query Fire : ' , query )
    try{
        const result = await client.query(query);
        return result.rows;    
    }
    catch(err){
        throw err.message;
    }
    client.end
}

module.exports = {myExecute};