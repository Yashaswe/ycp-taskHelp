const express=require("express");
const dotenv=require("dotenv");




dotenv.config();
const app=express();



app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

const authRouter=require("./routes/auth/authentication.routes");
const productRouter=require("./routes/products/products.routes")

const port=process.env.PORT||8080;


//add the routes
app.use("/authentication",authRouter);
app.use("/products",productRouter)



app.listen(port,()=>{
    console.log(`Server running at Port ${port}`);
})



