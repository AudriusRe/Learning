//npm i -g name //// atsiuncia npm package globaliai
//npm i -D name //// atsiuncia kaip dec dependency
//npm i name /// atsiuncia kaip dependency (kritiskai svarbus)
//CTRL+C - sustabdo terminale vykstanti procesa

import express from "express"

const app = express()

app.get("/labas", (req, res) => {
    res.json({
        labas: "labuksas"
    })
}) //pasakau aplikacijai, kad lauktu get requesto (cia adresas (endpointas) yra /labas). callbackas priima du argumentus: request (info apie ateinancia uzklausa) ir response (argumentas kuri kazkaip apdirbsime ir siusime frontendui)

app.listen(3000, () => console.log("App listening on PORT 3000")) //nurodom kuri porta naudojam (siuo atveju 3000), callbackas neprivalomas, taciau ji pasirasom, kad matytume kad appsas klauso ir laukia uzklausu