const schedule = require('node-schedule')

// */ -> 5 em 5 seg
// * -> qualquer min 
// 20 -> às 20h
// * -> ignora dia do mês
// * -> ignora mês
// 2 -> terça-feira (0 = dom, 1 = seg, 2 = ter)
const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) //Candela depois de 20 segs

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // Seg a Sex
regra.hour = 20 // Hora
regra.second = 30 // Segundo

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})