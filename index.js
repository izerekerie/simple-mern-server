require('./models/mongodb')
const express=require('express')
const foodController =require('./controllers/foodController')
var app =express()
const bodyParser=require('body-parser')
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('welcome to our app');
});
app.use('/api/foods',foodController);



const port=process.env.PORT || 5000;
app.listen(port,
    console.log(`listening on port ${port}`)
);

