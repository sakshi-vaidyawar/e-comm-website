const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/productRoute");
const cartRoute=require("./routes/cartRoute");
const orderRoute=require("./routes/orderRoute");




mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB conncetion successfull"))
.catch((err)=>{console.log(err)});
app.use(express.json());

app.get("/api/test",()=>{
    console.log("test succesfull");
})
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/products",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)
 
app.listen(process.env.PORT||5000,()=>{
    console.log("server is Running")
});