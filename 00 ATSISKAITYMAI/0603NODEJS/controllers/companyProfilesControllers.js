import db from "../db.js"

export async function getCompanyProfiles(req, res) {
    const { limit } = req.query;
    
    let query = "SELECT * from companyprofiles "
    
    if(limit !== undefined) {
        query += `limit ${limit} `
    }
    
    const { rows } = await db.query(query);
    
    res.json(rows)
}

export async function addCompanyProfile(req, res) {
    const { companyId, founder, foundedYear, numberOfEmployees } = req.body;

    const { rows } = await db.query(`
    INSERT into companyprofiles (companyId, founder, foundedYear, numberOfEmployees) 
    VALUES (${companyId}, '${founder}', ${foundedYear}, ${numberOfEmployees}) RETURNING *`)

    res.json({ data: rows[0] });
}

export async function updateCompanyProfile(req, res) {
    const { id } = req.params;
    const { companyId, founder, foundedYear, numberOfEmployees } = req.body;

    const response = await db.query(`UPDATE companyprofiles SET companyId = ${companyId}, founder = '${founder}', foundedYear = ${foundedYear}, numberOfEmployees = ${numberOfEmployees} WHERE id = ${id} RETURNING *`)

    console.log(response);

    res.json({ success: true })

}
