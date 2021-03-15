const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]
let Obj = new Object();
Obj["front-end"]=0;
Obj["back-end"]=0;
Obj["designer"]=0;
Obj["estagiario"]=0;
const soma = colaboradores.reduce((acc,colaboradores)=> {
  return acc + colaboradores.idade;
},0);
const colcarg = colaboradores.reduce((acc,colaboradores)=> {
  Obj[colaboradores.cargo]++;
},0); 
console.log(soma);
console.log(Obj)
  
  