import Comment from "../models/Comment.js"

export async function postComment(req, res) {
    const { date, comment } = req.body;

    const newComment = new Comment({
        date,
        comment
    })
    await newComment.save();

    res.json(newComment)
}


export async function getComments(req, res) {
    const comment =  await Comment.find();

    res.json(comment)
}


export async function deleteCommentById(req, res) {
    const { id } = req.params;

    try {
        const response = await Comment.findByIdAndDelete(id);
        if (!response) {
            res.status(404).json({ message: "Comment not found"});
            return;
        }

        res.json({ message: "success"})
    } catch (error) {
        res.status(500).json({ error: error.message})        
    }

}