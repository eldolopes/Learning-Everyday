//spread com objeto
const funcionario = { nome: 'ELdo Lope', salario: 25000}
const clone = { ...funcionario, ativo: true}
console.log(clone)

//spread com array
const grupoA = ['Eldo Lopes', 'Arthur Lopes', 'Duda Lopes']
const grupoB = ['Aline Silva', 'Bruna Suianne']
const gruposJuntos = [...grupoA, ...grupoB, 'Bruno Silva']
console.log(gruposJuntos)

