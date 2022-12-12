const modelCharacters = {
    queryGetCharacters: "SELECT * FROM Characters",
    queryGetCharactersByID: `SELECT * FROM Characters WHERE ID = ?`,
    queryDeleteCharactersByID: `UPDATE Characters SET Active = 'N' WHERE ID = ?`,
    querycharacterExist: `SELECT Constellation FROM Characters WHERE Constellation = ? `,
    queryaddcharacter: `INSERT INTO Characters(
        Name, 
        Gender,
        Rarity,
        Vision,
        Weapon,
        Affiliation,
        Birthday,
        Region,
        Constellation,
        Active) 
    VALUES(
        ?,?,?,?,?,?,?,?,?,?)`,
}

module.exports = modelCharacters