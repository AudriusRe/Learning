import User from "../models/User.js";
//import Membership from "../models/Membership.js";

export async function postUser(req, res) {
    const { name, surname, email } = req.body;

    const newUser = new User({
        name,
        surname,
        email
    })

    await newUser.save();

    res.json(newUser)
}

export async function addMembershipToUser(req, res) {
    const { userId, membershipId } = req.params;
  
    const user = await User.findById(userId);
    const membership = await Membership.findById(membershipId);
  
    user.membership.push(membership);
  
    await user.save();
  
    res.json(user)
  }

export async function getUsers(req, res) {
    const user =  await User.find();

    res.json(user)
}

export async function getUsersWithMemberships(req, res) {
    const users = await User.find().populate("membership");
  
    res.json(users)
  }