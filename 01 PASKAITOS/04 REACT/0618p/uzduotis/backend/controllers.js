import User from "./User.js"

export async function getUsers(req, res) {
    try {
    const users = await User.find();

    res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}
