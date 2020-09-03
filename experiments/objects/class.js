class  Lancamento {
    constructor(nome = 'genérico', valor= 0){
        this.nome = nome
        this.valor = valor
    }
}

class ClicoFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 50000)
const conta = new Lancamento('Luz', -220)

const ciclo = new ClicoFinanceiro(9, 2020)
ciclo.addLancamentos(salario, conta)
console.log(ciclo.sumario())