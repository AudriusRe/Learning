import Pet from "../models/Pet.js";

export async function addNewPet(req, res) {
    const { name, type, age } = req.body;

    if (!name || !type || !age) {
        res.status(400).json({ message: "All fields required (info missing in body"})
        return;
    }
    const newPet = new Pet({
        name,
        type,
        age
    })

    try {
        await newPet.save();
        res.status(201).json(newPet)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export async function getPet(req, res) {
    //const { minAge, maxAge } = req.query;
    try {
        const pets = await Pet.find({});
        // const pets = await pet
        // .find({ age: {
        //     $gte : minAge,
        //     $lte : maxAge
        // } }, { __v: 0 })
        // .sort({ age: -1 })
        // .limit(amount)
        // .skip(amount * (page - 1));
        res.json(pets)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}