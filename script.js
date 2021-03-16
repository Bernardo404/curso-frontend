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
  Obj[colaboradores.cargo]++;
  return acc + colaboradores.idade;
},0);
const crescente = colaboradores.slice().sort((a,b)=>{
  return a.idade-b.idade;                                     
});
const decrescente = colaboradores.slice().sort((a,b)=>{
  return b.idade-a.idade;                                     
});
const ordena = colaboradores.slice().sort((a=0,b)=>{

});
console.log(soma);
console.log(Obj);
console.log(crescente);
console.log(decrescente);

  
  