import db from "../db.js"

export async function getCompanyProfiles(req, res) {
    try {
        const query = "SELECT * FROM companyprofiles";
        const { rows } = await db.query(query);

        res.json(rows);

    } catch (error) {
        console.error('Error fetching company profiles:', error);

        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function addCompanyProfile(req, res) {
    const { companyId, founder, foundedYear, numberOfEmployees } = req.body;

    try {

        const companyExistsQuery = `
            SELECT id FROM companies 
            WHERE id = $1;
        `;
        const companyExistsResult = await db.query(companyExistsQuery, [companyId]);

        if (companyExistsResult.rows.length === 0) {

            return res.status(400).json({ error: 'Invalid companyId. Company does not exist.' });
        }

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

    try {
        const updateQuery = `
            UPDATE companyprofiles 
            SET companyId = $1, founder = $2, foundedYear = $3, numberOfEmployees = $4 
            WHERE id = $5 
            RETURNING *;
        `;
        const updateValues = [companyId, founder, foundedYear, numberOfEmployees, id];

        const { rows } = await db.query(updateQuery, updateValues);

        res.json({ success: true, data: rows[0] });

    } catch (error) {
        console.error('Error updating company profile:', error);

        res.status(500).json({ error: 'Internal server error' });
    }
}