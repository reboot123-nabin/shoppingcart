const mongoose=require('mongoose');

const Cart=mongoose.model("Cart",{
    image:{
        type:String
    },
    name:{
        type:String
    },
    desc:{
        type:String
    },
    price:{
        type:String
    }
 
})


module.exports=Cart;