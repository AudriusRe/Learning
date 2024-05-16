import Person from "../models/Person.js";
import Phone from "../models/Phone.js";

export async function addPerson(req, res) {
    const { name, email } = req.body;

    const newPerson = new Person({
        
        name,
        email
    })

    await newPerson.save();

    res.json(newPerson)
}


export async function addPhoneToPerson(req, res) {
    const { personId, phoneId } = req.params; //cia norim gauti id zmogaus, kuriam pridesim e telefona, kuri rasime pagal id

    const person = await Person.findById(personId); //bandom susirasti zmogu pagal id
    const phone = await Phone.findById(phoneId); //bandom susirasti telefona pagal id

    person.phone.push(phone); //prie zmogaus array pridedam nauja telefona (cia prides id)

    await person.save(); //issaugom atnaujinta informacija apie zmogu duomenu bazej

    res.json(person) //grazinam pakeista zmogu
}

export async function getPeople(req, res) {
    const people =  await Person.find();

    res.json(people)
}

export async function getPeopleWithPhones(req, res) {
    const people = await Person.find().populate("phone");

    res.json(people)
}