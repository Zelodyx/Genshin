const express = require('express') 
const characterRouter = require('./routes/Characters')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            character:"/api/v1/character"
        }

        this.middlewares()
        this.routes()
    }

    routes(){

        this.app.use(this.paths.character, characterRouter)
  }

  middlewares(){
    this.app.use(cors()) //habilita origen crusado
    this.app.use(express.json())
  }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto 4000', this.port)
        })
    }
}

module.exports = Server