const express=require("express");
const router=express.Router();
const upload=require('../middleware/upload');

const Cart=require('../models/cart_model');


router.post('/cart/insert',upload.single('image'),function(req,res){
    const price=req.body.price;
    const image=req.file.filename;
    const desc=req.body.desc;
    const name=req.body.name;
    console.log(req.body)
    //console.log(req.body);
    const ndata=new Cart({
        price:price,
        image:image,
        desc:desc,
        name:name
    })

ndata.save()
.then(function(productItems){
    res.status(201).json({message:"cart created",productItems:productItems})
})
.catch(function(e){
    res.status(500).json({abc:e})
})
})

module.exports=router;