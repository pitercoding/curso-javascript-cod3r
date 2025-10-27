const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((res) => {
  const funcionarios = res.data;
  
  const mulheresChinesas = funcionarios.filter(f => f.genero === 'F' && f.pais.toLowerCase() === 'china')

  const mulherComMenorSalario = mulheresChinesas.reduce((menor, atual) => {
    return atual.salario < menor.salario ? atual : menor
  })

  console.log(mulherComMenorSalario)
});