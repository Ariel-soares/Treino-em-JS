const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const mulher = m => m.genero == 'M'

    const chines = c => c.pais == 'China'

    const procurada = funcionarios.filter(mulher).filter(chines)

    //console.log(procurada)

    for(let i = 0; i <= procurada.lenght; i++){

        console.log(procurada[i])
        

    }

})