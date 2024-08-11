import express from 'express'
import dotenv from "dotenv"
import connectDB from './db/index.js'
import createComment from './controllers/comment.controller.js'
import Comment from "./models/comment.model.js"
import cors from "cors"

dotenv.config({
    path: '../env'
})

const app = express()
app.use(express.json())
app.use(cors())

connectDB().
then(()=>{

    app.post('/api/comments',createComment)

    app.get('/api/comments',async (req,res)=>{
        try{
            const comments = await Comment.find();
            res.json(comments)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    })

    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server running at: ${process.env.PORT || "3000"}`);
    })
})
.catch((error)=>{
    console.log("mongo db connection failed", error);
})