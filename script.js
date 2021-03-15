const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]
var bolsistas=[" "," "];
var cont=0;
students.forEach(function(elem,x,students){
  let nome=students[x]['name'];
  let bolsistas= ["",""];
  console.log(nome)
  if(students[x]['age']>20){
    console.log(students[x]['name']);
  }
  if(students[x]['scholarship']==true){
    bolsistas[cont]=nome;
    cont++;
    console.log(bolsistas[cont-1])
  }
});


