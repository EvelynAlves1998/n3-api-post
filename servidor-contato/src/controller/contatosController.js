const contatosCollection = require("../model/contatoSchema");


const add = (request, response) => {
  //novo objeto para nossa coleçao
  const contatoDobody = request.body
  const contato = new contatosCollection(contatoDobody)
  
  contato.save(error =>{
    //if(error !== null && !== undefined)
    if(error){
      return response.status(400).send(error)
      
    }else{
      return response.status(201).send(contato)
    }
  })
};

const getAll = (request, response) => {
  // response.status(200).send(model.agenda);
  console.log(request.url)
      contatosCollection.find((error,contatos) => {
      
      if(error){
        
        return response.status(500),send(error)
      
      }else{

        return response.status(200).send(contatos)

      }
    })  
};

    module.exports = {

      getAll,
      add
      
    }
