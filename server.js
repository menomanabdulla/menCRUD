const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
const MongoClient = require('mongodb').MongoClient
let db = null
MongoClient.connect('mongodb://menomanabdulla:noman123321BAPPY@ds261660.mlab.com:61660/star-wars-talk',(err,client) => {
    if(err) return console.log(err)
    db = client.db('star-wars-talk')

    app.listen(3000,()=>{
        console.log('listening on 3000')
    })
})


/*app.listen(3000,function(){
    console.log('app listen')
})*/
app.post('/ui',(req,res) => {
    res.send('hello world')
})

app.get('/',(req,res)=>{
    db.collection('quotes').find().toArray((err,result)=>{
       if(err) return console.log(err)
       res.render('index.ejs',{quotes:result})
    })
})

app.post('/quotes', (req, res) => {
    //console.log(req.body)
    db.collection('quotes').save(req.body,(err,result)=>{
        if(err) return console.log(err)

        console.log('Saved to database')

        res.redirect('/')
    })
})