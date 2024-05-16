import People from "./models/People.js";

export async function getPeople(req, res) {

try {
    const person = await People.find({});
    res.json(person);
} catch (error) {
    res.status(500).json({ error: error.message})
}
}

export async function addPeople(req, res) {
    const { name, surname, age } = req.body;

    if (!name || !surname || !age) {
        res.status(400).json({ message: "All fields required"});
        return;
    }
        const newPerson = new People({
            name,
            surname,
            age
        })
        
    try {
        await newPerson.save();
        
        res.status(201).json(newPerson)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }

}
