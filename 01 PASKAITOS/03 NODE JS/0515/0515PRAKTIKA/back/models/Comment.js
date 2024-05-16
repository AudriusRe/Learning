import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    date: String,
    comment: String,
    // user_id: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User"
    //     }
    // ]
})


export default mongoose.model("Comment", commentSchema);