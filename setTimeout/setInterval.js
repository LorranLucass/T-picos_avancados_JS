//Executa continuamente o código 

let seconds = 0
setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
}, 3 * 1000)