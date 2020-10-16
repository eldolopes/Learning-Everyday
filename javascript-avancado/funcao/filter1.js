const alunos = [
    {nome: 'Eldo Lopes', nota: 7.0},
    {nome: 'Arthur Lopes', nota: 8.0},
    {nome: 'Duda Lopes', nota: 4.0},
    {nome: 'Aline Lopes', nota: 3.0},    
]

const notas = nota => nota.nota
const resultado = nota => {    
    if(nota >= 7) {
        console.log('Aprovado!')
    } else if (nota >= 4){
        console.log('Recuperação')
    } else {
        console.log('Reprovado')
    }  
}

const res = alunos.map(notas).filter(resultado)