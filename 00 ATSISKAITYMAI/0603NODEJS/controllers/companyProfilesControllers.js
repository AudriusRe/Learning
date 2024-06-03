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

    try {

        await db.query('BEGIN');


        const insertQuery = `
            INSERT INTO companyprofiles (companyId, founder, foundedYear, numberOfEmployees)
            VALUES ($1, $2, $3, $4)
            RETURNING id;
        `;
        const insertValues = [companyId, founder, foundedYear, numberOfEmployees];
        const insertResult = await db.query(insertQuery, insertValues);
        const profileId = insertResult.rows[0].id;


        const updateQuery = `
            UPDATE companies
            SET profileId = $1
            WHERE id = $2
            RETURNING *;
        `;
        const updateValues = [profileId, companyId];
        const updateResult = await db.query(updateQuery, updateValues);


        await db.query('COMMIT');

        res.json({ data: updateResult.rows[0] });
    } catch (error) {

        await db.query('ROLLBACK');
        console.error('Error adding company profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function updateCompanyProfile(req, res) {
    const { id } = req.params;
    const { companyId, founder, foundedYear, numberOfEmployees } = req.body;

    const response = await db.query(`
    UPDATE companyprofiles 
    SET companyId = ${companyId}, founder = '${founder}', foundedYear = ${foundedYear}, numberOfEmployees = ${numberOfEmployees} 
    WHERE id = ${id} 
    RETURNING *
    `)

    console.log(response);

    res.json({ success: true })

}
