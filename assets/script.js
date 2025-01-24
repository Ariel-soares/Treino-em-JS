const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

axios.get(url).then(response => {

    const funcionarios = response.data

    const mulher = m => m.genero === 'F'

    const chines = c => c.pais === 'China'

    const menorSalario = (funcionario, funcAtual) => {
        return funcionario.salario < funcAtual.salario ? funcionario : funcAtual
    }

    const MulherProcurada = funcionarios.filter(mulher).filter(chines).reduce(menorSalario)


    console.log(MulherProcurada)


})