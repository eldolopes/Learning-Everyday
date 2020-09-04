let familia = ['Eldo', 'Aline', 'Arthur']
familia[3] = 'Duda'
familia.push('Zeus')
console.log(familia)
console.log(familia.length)

familia.sort()
console.log(familia)

delete familia[4] //apaga mas não exclue e indice do array
console.log(familia[4])
console.log(familia)

familia = [ 'Aline', 'Arthur', 'Duda', 'Eldo', 'Zeus' ]
familia.splice(0, 4)//primeiro parâmetro será o início do índice, o segundo será quantas valores serão excluídos a partir do primeiro parâmetro
familia.splice(0, 0, 'Eldo', 'Arthur')//adiciona valores a partir dos parâmentos
console.log(familia)

