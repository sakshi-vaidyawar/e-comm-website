const router=require("express").Router();
const Cart = require("../models/Cart");
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");



// create Cart

router.post("/",verifyToken,async(req,res)=>{
    const newCart=new Cart(req.body);
    try {
        
        const saveCart=await newCart.save();
        res.status(200).json(saveCart);
    } catch (err) {
        res.status(500).json(err);
        
    }
});

// // updte cart
router.put("/:id",verifyToken,async(req, res)=>{
    try {
        const updatedCart=await Cart.findByIdAndUpdate(req.params.id,
            {
                $set:req.body
            },{
                new:true
            }
            );
            res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})

// // Delete product

router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try {
    await Cart.findById(req.params.id);
        res.status(200).json("Cart has been deleted...")
    } catch (err) {
        
        res.status(500).json(err)
    
    }


})

// // get user cart

router.get("/find/:userId",verifyTokenAndAuthorization, async(req,res)=>{
    try{
       const cart= await Cart.findOne({userId:req.params.userId});
      
       res.status(200).json(cart);

    }catch(err){
        res.status(500).json(err);
    }
});

// // get all PRoduct
router.get("/",verifyTokenAndAdmin,async(req,res)=>{

    try{
        const carts=await Cart.find();
        res.status(200).json(carts)

    }catch(err){
        res.status(500).json(err)
    }
})




module.exports=router