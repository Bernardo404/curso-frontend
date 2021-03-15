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
const nomes=colaboradores.slice().map(colaboradores =>{
  return colaboradores.name;
});
const colfe=colaboradores.slice().filter(colaboradores =>{
  return colaboradores.cargo === 'front-end';
});
const maior23=colaboradores.slice().find(colaboradores =>{
  return colaboradores.idade > 23;
});
const sedemaior=colaboradores.slice().every(colaboradores =>{
  return colaboradores.idade > 18;
});
const estagiario=colaboradores.slice().some(colaboradores =>{
  return colaboradores.cargo ==='estagiario';
});
console.log(nomes);
console.log(colfe)
console.log(maior23)
console.log(sedemaior)
console.log(estagiario)
