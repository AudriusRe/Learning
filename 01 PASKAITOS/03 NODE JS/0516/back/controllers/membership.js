import Membership from "../models/Membership.js";
import User from "../models/User.js"

export async function postMembership(req, res) {
    const { name, price, description } = req.body;

    const newMembership = new Membership({
        name,
        price,
        description
    })
    await newMembership.save();

    res.json(newMembership)
}


export async function getMemberships(req, res) {
    const membership =  await Membership.find();

    res.json(membership)
}


export async function deleteMembershipById(req, res) {
    const { id } = req.params;

    try {
        const response = await Membership.findByIdAndDelete(id);
        if (!response) {
            res.status(404).json({ message: "Membership not found"});
            return;
        }

        res.json({ message: "success"})
    } catch (error) {
        res.status(500).json({ error: error.message})        
    }

}