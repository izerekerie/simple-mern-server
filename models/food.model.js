
const mongoose=require('mongoose');

const FoodSchema= new mongoose.Schema({
    foodName:{
        type:String,
        require:true
    },
    daysSinceAte:{
        type:Number,
        require:true,
    }
});
mongoose.model('FoodData',FoodSchema);


