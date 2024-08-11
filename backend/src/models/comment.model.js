import mongoose from "mongoose"

const commentSchema = new mongoose.Schema(
    {
        owner: {
            type: String,
            required: true,
            trim: true,
            lowercase : true
        },
        content: {
            type: String,
            required: true
        }
    },{timestamps: true}
)

 const Comment = mongoose.model("Comment",commentSchema)

 export default Comment