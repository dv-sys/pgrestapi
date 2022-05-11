const client = require("./connection.js");
const express = require("express");
const app = express();


client.connect();

//All Data Fetch 
app.get('/users',(req,res)=>{
    client.query("SELECT * FROM users", (err,result)=>{
        res.send(result.rows);
    })
    client.end;    
})

//id Data Fetch
app.get('/users/:id',(req,res)=>{
    client.query(`SELECT * FROM users WHERE id=${req.params.id}`, (err,result)=>{
        res.send(result.rows);
    })
    client.end;    
})

//Insert Data Using API
app.get('/insusers',(req,res)=>{
    const user = req.body;
    const insQ = `INSERT INTO users (id,first_name,last_name,city) VALUES (${user.id},'${user.first_name}','${user.last_name}','${user.city}') `;
    console.log(insQ);
    client.query(insQ, (err,result)=>{
        if(!err){
            res.send("Inserted Data Successfully");
        }
        else{
            res.send(err.message);
        }
    })

    client.end;    
})

app.listen(8000);
