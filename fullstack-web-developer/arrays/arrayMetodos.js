const pilotos = ['alonso', 'verstappen', 'bottas', 'massa']
pilotos.pop() //remove o ultimo indice
console.log(pilotos)

pilotos.push('Eldo')//adiciona um novo indice na ultima posição
console.log(pilotos)

pilotos.shift()//remove o primeiro indice do array
console.log(pilotos)

pilotos.unshift('Arthur')//adiciona um novo indice na primeira posição do array
console.log(pilotos)

pilotos.splice(4,0, 'Duda', 'Aline')//adiciona um novo indice a partir do indice 4
console.log(pilotos)

pilotos.splice(5,1)//remove 1 indice a partir do indice 5
console.log(pilotos)

const algunsPilotos = pilotos.slice(3)//salva os dados a partir do indice 3
console.log(algunsPilotos)

const outrosPilotos = pilotos.slice(1, 4)//salva os dados entre o primeiro indice e o anterior ao definido
console.log(outrosPilotos)