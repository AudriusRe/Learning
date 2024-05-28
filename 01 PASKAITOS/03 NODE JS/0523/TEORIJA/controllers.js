import db from "./db.js"

export async function addItem(req, res) {
    const { title } = req.body;

    const { rows } = await db.query(`insert into items (title) values ('${title}') returning *`)

    res.json({ data: rows[0] });
}

export async function getItems(req, res) {
    const { limit } = req.query;

    let query = "select * from items "

    if(limit !== undefined) {
        query += `limit ${limit} `
    }
    
    const { rows } = await db.query(query);

    res.json(rows)
}

export async function deleteItemById(req, res) {
    const { id } = req.params;

    const response = await db.query(`delete from items where id = ${id} returning *`)

    console.log(response);

    res.json({ success: true })

}