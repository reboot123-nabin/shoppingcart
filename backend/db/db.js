const mongoose=require('mongoose');

const connectDB=()=>mongoose.connect('mongodb://127.0.0.1:27017/cartsystem',{
    useNewUrlParser: true,
 useUnifiedTopology : true

})
module.exports = connectDB;