import  Comment  from "../models/comment.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createComment = asyncHandler(async(req,res)=>{
    const {owner, content} = req.body

    if(
        [owner, content].some((field)=>field?.trim()=="")
    ){
        throw new ApiError(400, "All fields are required")
    }

    const comment = await  Comment.create({
        owner,
        content
    })

    return res.status(201).json(
        new ApiResponse(200, comment,"Comment created successfully")
    )
})

export default createComment