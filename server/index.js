import express from "express"
import cors from "cors"

 const app = express()

 app.use(express.json())
 app.use(cors({
   origin : [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
   ],
   credentials : true,
   methods : ["GET","POST"]

 }))


 //API Route
 app.get("/api/message",(req,res)=>{
    res.json({message : "Hello"})
 })


 const PORT = 3000
 app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`Server is listening on ${PORT}`);
 })