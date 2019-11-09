const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
}

const add = (request, response) => {
  let contato = request.body

  contato.id = Math.random().toString(36).substr(-8)
  console.log(contato)

  model.agenda.contatos.push(contato)
  response.status(200).send()
}

// const nome = (request, response) => {
//   const contato = request.body

//   let conta = 0

//     for (let i = 0; i < model.agenda.contatos.length; i++) {
//       if (model.agenda.contatos[i].nome !== contato.nome) {
//       conta = conta + 1
//       }
//     }
//     if (conta > 0) {
//       console.log("Esse nome ja existe")
//       response.sendStatus(400)
//     } else {
//       console.log("Contato Adicionado")
//       console.log(contado)

//       if(typeof contato.id === 'ID' && contato.id > 0){
//         model.agenda.contatos.push(contato)
//         response.sendStatus(200)
//       }else{
//         console.log("ID Existente")
//         response.sendStatus(400)
//         } 
//       } 
//     response.status(200).send()
//     }


    // const signo = (request, response) => {
    // }



    module.exports = {
      getAll,
      add,
      nome
      //signo
    }
