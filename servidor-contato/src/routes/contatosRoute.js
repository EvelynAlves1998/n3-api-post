const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.get("/nome/:nome", controller.getByName)
router.get("/id/:id", controller.getById)
router.delete("/deletar/:id", controller.deleteById)
router.post("/criar", bodyParser.json(), controller.add)
//não faremos o PUT
router.patch("/atualizar/:id", bodyParser(),controller.updateById)
// app.patch('/user/:id', function (req, res) {
//   var updateObject = req.body;
//   var id = req.params.id;
//   db.users.update({_id  : ObjectId(id)}, {$set: updateObject});
// });

module.exports = router
