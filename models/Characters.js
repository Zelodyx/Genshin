const modelCharacters = {
    queryGetCharacters: "SELECT * FROM Characters",
    queryGetCharactersByID: `SELECT * FROM Characters WHERE ID = ?`,
    queryDeleteCharactersByID: `UPDATE Characters SET Active = 'N' WHERE ID = ?`,
}

module.exports = modelCharacters