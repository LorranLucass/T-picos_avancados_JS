/*Uma promise é uma forma mais fácil de trabalhar com códigos assíncronos no javascript. 
Ela é um objeto que é instanciado através da classe Promise e recebe uma função como parâmetro. 
Essa função é executada quando a promise é criada, porém sem bloquear a execução do código: */


function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 3 * 1000)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 5 * 1000)