const express =require('express')
const bodyParser=require('body-parser')
const {ObjectID,MongoClient}=require('mongodb')
const assert=require('assert')

const app= express()
app.use(bodyParser.json())
const MongoUrl='mongodb://localhost:27017'
const database='hamzabd'

MongoClient.connect(MongoUrl,{useNewUrlParser:true},(err,client)=>{
    assert.equal(null,err,'can not connect to database')
    const db=client.db(database)

    app.post('/add-contact',(req,res)=>{
        let newcontact=req.body
        db.collection('contacts').insertOne(newcontact,(err,data)=>{
            if(err) res.send('cant not add contact')
            else res.send(data)
        })
    })

    app.get('/get-contact',(req,res)=>{

db.collection('contacts').find().toArray((err,data)=>{
     if(err) res.send('can not get contact')
    else res.send(data)
})   
})



app.put('/edit-contact/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    let updated=req.body
db.collection('contacts').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    if(err) res.send('can not edit the contacts')
    else res.send (data)
})
})


app.delete('/delete-contact/:id', (req,res)=>{
    let contacttoremove=ObjectID(req.params.id)
    db.collection('contacts').findOneAndDelete({_id:contacttoremove},(err,data)=>{
        if(err) res.send('can not delete this contact')
        else res.send(data)
    })



})






























})


app.listen(3090,(err)=>{
assert.equal(null,err,'server not running')
console.log('server is running on port 3090')
})