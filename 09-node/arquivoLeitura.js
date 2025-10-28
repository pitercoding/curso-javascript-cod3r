//fs já vem no node_modules
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//Lê Json e já converte para objeto
const config = require('./arquivo.json')
console.log(config.db)

//Lê diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('==== Conteúdo do Diretório ====')
    console.log(arquivos)
})