import db from "../db.js"

export async function getCompanies(req, res) {
    const { limit } = req.query;

    let query = "select * from companies "

    if(limit !== undefined) {
        query += `limit ${limit} `
    }
    
    const { rows } = await db.query(query);

    res.json(rows)
}

export async function addCompany(req, res) {
    const { name, industry, location, profileId } = req.body;

    const { rows } = await db.query(`
    INSERT into companies (name, industry, location, profileId) 
    VALUES ('${name}', '${industry}', '${location}', ${profileId}) 
    RETURNING *`)

    res.json({ data: rows[0] });
}


export async function getCompanyById(req, res) {
    const { id } = req.params;

    const { rows } = await db.query(`select * from companies where id = ${id}`)

    res.json(rows)
}

export async function updateCompany(req, res) {
    const { id } = req.params;
    const { name, industry, location, profileId } = req.body;

    const response = await db.query(`UPDATE companies SET name = '${name}', industry = '${industry}', location = '${location}', profileId = '${profileId}' WHERE id = ${id} returning *`)

    console.log(response);

    res.json({ success: true })

}