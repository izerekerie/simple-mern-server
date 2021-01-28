const express =require('express')
const mongoose=require('mongoose');
mongoose.set('useFindAndModify', false);
const Food= mongoose.model('FoodData')
var router =express.Router();

router.get('/read',(req,res)=>{
    Food.find()
    .then(food=>res.send(food).status(201))
    .catch(err=>res.send(err).status(404));
})

router.post('/insert',(req,res)=>{
    let food =new Food();
   food.foodName=req.body.foodName;
   food.daysSinceAte=req.body.daysSinceAte;
   food.save()
    .then(foodSaved =>res.send(foodSaved).status(201))
    .catch(err=>res.send(err+'heyo').status(400));
})



router.put('/update',(req,res) => {
    updateIntoMongoDB(req,res);
});

router.delete('/delete/:id', (req, res) => {
    Food.findByIdAndRemove(req.params.id)
        .then(food => res.send(food))
        .catch(err => res.send(err).status(404));
});
function updateIntoMongoDB(req, res) {
    Food.findOneAndUpdate({_id: req.body.id },
        req.body, { new: true })
       .then(foodupdated=> res.send(foodupdated))
       .catch(err => res.send(err).status(400));
   }

module.exports=router;

