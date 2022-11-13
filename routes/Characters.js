const {Router} = require("express")
const { addcharacter, deletecharacterbyID, getcharacter, getcharacterbyID, updatecharacterbyID } = require("../controllers/Characters")
const router = Router()

///GET///
router.get("/", getcharacter)
router.get("/id/:id", getcharacterbyID)

///POST///
router.post("/", addcharacter)
router.post("/id/:id", updatecharacterbyID)

///DELETE///
router.delete("/id/:id", deletecharacterbyID)
module.exports = router