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

// Root route to avoid "Cannot GET /" in browsers
app.get('/', (req, res) => {
   res.json({ message: 'Server is running. Use /api/message for the API.' })
})


 const PORT = 3000
 app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`Server is listening on ${PORT}`);
 })