const router=require("express").Router();

const Order=require("../models/Order")
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}=require("./verifyToken")

router.post("/",verifyToken,async(req,res)=>{
    const newOrder=new Cart(req.body);
    try {
        
        const saveOrder=await newOrder.save();
        res.status(200).json(saveOrder);
    } catch (err) {
        res.status(500).json(err);
        
    }
});

// // updte cart
router.put("/:id",verifyTokenAndAdmin,async(req, res)=>{
    try {
        const updatedOrder=await Order.findByIdAndUpdate(req.params.id,
            {
                $set:req.body
            },{
                new:true
            }
            );
            res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})

// // Delete product

router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
    await Order.findById(req.params.id);
        res.status(200).json("Order has been deleted...")
    } catch (err) {
        
        res.status(500).json(err)
    
    }


})

// // get user order

router.get("/find/:userId",verifyTokenAndAuthorization, async(req,res)=>{
    try{
       const orders= await Order.find({userId:req.params.userId});
      
       res.status(200).json(orders);

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