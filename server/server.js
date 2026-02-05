import cors from "cors";
import "dotenv/config";
import express from "express";
import connectDB from "./configs/db.js";

import aiRouter from "./routes/aiRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app=express();
const PORT =process.env.PORT || 3000;

// database connection

await connectDB()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>res.send("Server is live..."))


app.use('/api/users',userRouter)
app.use('/api/resumes',resumeRouter)
app.use('/api/ai',aiRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});