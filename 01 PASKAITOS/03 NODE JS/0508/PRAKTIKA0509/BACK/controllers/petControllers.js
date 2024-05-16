import Pet from "../models/Pet.js";

export async function getPets(req, res) {

try {
    const pets = await Pet.find({});
    res.json(pets);
} catch (error) {
    res.status(500).json({ error: error.message})
}
}

export async function addPet(req, res) {
    const { name, type, age } = req.body;

    if (!name || !type || !age) {
        res.status(400).json({ message: "All fields required"});
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

export async function deletePetById(req, res) {
    const { id } = req.params;

    try {
        const response = await Pet.findByIdAndDelete(id);
        if (!response) {
            res.status(404).json({ message: "Pet not found"});
            return;
        }

        res.json({ message: "success"})
    } catch (error) {
        res.status(500).json({ error: error.message})        
    }

}