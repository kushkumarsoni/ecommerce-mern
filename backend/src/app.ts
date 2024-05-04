import express  from "express";
import userRoute from "./routes/user.js";
import connectDB from "./utils/Database.js";

const app = express();
app.use(express.json());

const port = 4000;

connectDB();

//add routes
app.use("/api/v1/users",userRoute);

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});