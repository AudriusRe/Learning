import db from "./db.js"

export async function addCar(req, res) {
    const { title, image, price, numberplates } = req.body;

    const { rows } = await db.query(`insert into cars (title, image, price, numberplates) values ('${title}', '${image}', ${price}, '${numberplates}') returning *`)

    res.json({ data: rows[0] });
}

export async function getCars(req, res) {
    const { limit } = req.query;

    let query = "select * from cars "

    if(limit !== undefined) {
        query += `limit ${limit} `
    }
    
    const { rows } = await db.query(query);

    res.json(rows)
}

export async function getCarById(req, res) {
    const { id } = req.params;

    const { rows } = await db.query(`select * from cars where id = ${id}`)

    res.json(rows)
}


export async function deleteCarById(req, res) {
    const { id } = req.params;

    const response = await db.query(`delete from cars where id = ${id} returning *`)

    console.log(response);

    res.json({ success: true })

}