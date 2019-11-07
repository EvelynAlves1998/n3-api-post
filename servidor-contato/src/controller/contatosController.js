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
  
//   let contato = request.body.nome
  
//   if (contato.nome != contato.nome) {
  
//     let arrcontato = contato.split(arrcontato).filter((palavra, i) = 
//     arrcontato.indexOf(palavra) === i);

//     model.agenda.contatos.push(contato)
//     response.status(200).send()
    
//   }else{ 
    
//     response.status(404).send("Nome Repetido")
//   }
//   console.log(contato)
// }


module.exports = {
  getAll,
  add,
  nome
}

