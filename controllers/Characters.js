const { request, response } = require("express");
const pool = require("../db/connection");
const modelCharacters = require ("../models/Characters");

const addcharacter = async (req = request, res = response) =>{
    const {
        Name, 
        Gender,
        Rarity,
        Vision,
        Weapon,
        Affiliation,
        Birthday,
        Region,
        Constellation,
        Active = 'S'} = req.body
    
    if(!Name|| 
        !Gender||
        !Rarity||
        !Vision||
        !Weapon||
        !Affiliation||
        !Birthday||
        !Region||
        !Constellation||
        !Active)
    {
        res.status(400).json({msg:"Faltan Datos"})
        return
    }

    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        const [characterExist] = await conn.query(`SELECT Constellation FROM Characters WHERE Constellation = '${Constellation}' `)

        if(characterExist){
            res.status(400).json({msg: `El Personaje ${Name} ya se encuntra registrado.`})
            return
        }
        //Generamos la consulta
        const result = await conn.query(`INSERT INTO Characters(
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
            '${Name}', 
            '${Gender}',
            ${Rarity},
            '${Vision}',
            '${Weapon}',
            '${Affiliation}',
            '${Birthday}',
            '${Region}',
            '${Constellation}',
            '${Active}'
            )
            `, (error) => {if (error) throw error})

        if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
            res.status(400).json({msg: `No se pudo agregar el Personaje`})
            return
        }

        res.json({msg:`Se agrego satisfactoriamente el Personaje`}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }

const deletecharacterbyID = async (req = request, res = response) =>{
    const {id} = req.params
        let conn;
        
        try{
            conn = await pool.getConnection() //Realizamons la conexion
    
            //Generamos la consulta
            const result = await conn.query(modelCharacters.queryDeleteCharactersByID, [id], (error) => {if (error) throw error})
    
            if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                res.status(404).json({msg: `No existen personaje registrado con el ID ${id}`})
                return
            }
    
            res.json({msg:`Se elimino satisfactoriamente el personaje`}) //Se manda la lista de usuarios
        }
        catch(error){
            console.log(error)
            res.status(500).json({msg: error}) //Informamos el error
        }
        
        finally{
            if(conn) conn.end() //Termina la conexion
        }
    
    }

const getcharacter = async (req = request, res = response) =>{
    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const characters = await conn.query(modelCharacters.queryGetCharacters, (error) => {if (error) throw error})

        if (characters.length===0){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: "No existen personajes registrados"})
            return
        }

        res.json({characters}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }

const getcharacterbyID = async (req = request, res = response) =>{
    const {id} = req.params
    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const [character] = await conn.query(modelCharacters.queryGetCharactersByID, [id], (error) => {if (error) throw error})

        if (!character){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: `No existe personaje registrado con el ID ${id}`})
            return
        }

        res.json({character}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }

const updatecharacterbyID = async (req = request, res = response) =>{
    const {id} = req.params
            const {
                Name, 
                Gender,
                Rarity,
                Vision,
                Weapon,
                Affiliation,
                Birthday,
                Region,
                Constellation,
                Active
                   } = req.body
            
            if(
                !Name|| 
                !Gender||
                !Rarity||
                !Vision||
                !Weapon||
                !Affiliation||
                !Birthday||
                !Region||
                !Constellation||
                !Active
               )
            {
                res.status(400).json({msg:"Faltan Datos"})
                return
            }

            let conn;
            
            try{
                conn = await pool.getConnection() //Realizamons la conexion
        
                //Generamos la consulta
                const result = await conn.query(`UPDATE Characters SET 
                Name = '${Name}', 
                Gender = '${Gender}',
                Rarity = ${Rarity},
                Vision = '${Vision}',
                Weapon = '${Weapon}',
                Affiliation = '${Affiliation}',
                Birthday = '${Birthday}',
                Region = '${Region}}',
                Constellation = '${Constellation}',
                Active = '${Active}'
                WHERE ID = ${id}`, (error) => {if (error) throw error})
        
                if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                    res.status(400).json({msg: `No se pudo modificar el personaje`})
                    return
                }
        
                res.json({msg:`Se modifico satisfactoriamente el personaje`}) //Se manda la lista de usuarios
            }
            catch(error){
                console.log(error)
                res.status(500).json({msg: error}) //Informamos el error
            }
            
            finally{
                if(conn) conn.end() //Termina la conexion
            }
    }    
module.exports = {addcharacter, deletecharacterbyID, getcharacter, getcharacterbyID, updatecharacterbyID}