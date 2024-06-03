import db from "../db.js"

export async function getCompanies(req, res) {
    try {
        const query = "SELECT * FROM companies";
        const { rows } = await db.query(query);

        res.json(rows);

    } catch (error) {
        console.error('Error fetching companies:', error);

        res.status(500).json({ error: 'Internal server error' });
    }
}


export async function addCompany(req, res) {
    const { name, industry, location, profileId } = req.body;

    try {
        const insertQuery = `
            INSERT INTO companies (name, industry, location, profileId) 
            VALUES ($1, $2, $3, $4) 
            RETURNING *;
        `;
        const insertValues = [name, industry, location, profileId];

        const { rows } = await db.query(insertQuery, insertValues);

        res.json({ data: rows[0] });

    } catch (error) {

        console.error('Error adding company:', error);

        res.status(500).json({ error: 'Internal server error' });
    }
}


export async function getCompanyById(req, res) {
    const { id } = req.params;

    try {
        const query = `
            SELECT * FROM companies 
            WHERE id = $1;
        `;
        const { rows } = await db.query(query, [id]);

        res.json(rows);

    } catch (error) {
        console.error('Error fetching company by ID:', error);

        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function updateCompany(req, res) {
    const { id } = req.params;
    const { name, industry, location, profileId } = req.body;

    try {
        const updateQuery = `
            UPDATE companies 
            SET name = $1, industry = $2, location = $3, profileId = $4 
            WHERE id = $5 
            RETURNING *;
        `;
        const updateValues = [name, industry, location, profileId, id];

        const { rows } = await db.query(updateQuery, updateValues);

        res.json({ success: true, data: rows[0] });

    } catch (error) {
        console.error('Error updating company:', error);
        
        res.status(500).json({ error: 'Internal server error' });
    }
}
