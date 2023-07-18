const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://guptadishant90:Dishant@dishant.esj91ql.mongodb.net/foodfactory",{
  
}).then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})


