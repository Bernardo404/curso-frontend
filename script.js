//Object
//acesso as props com ponto
const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }  
  console.log(user.nome)
  console.log(user.endereco.rua)
  console.log(user.projetos[1])

  //acesso as props com colchetes
  console.log(user['nome'])
  console.log(user.endereco['rua'])
  console.log(user.projetos[1])
