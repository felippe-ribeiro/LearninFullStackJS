// estados promises
/*
Pendente: Quando é criada e não foi executada // status inicial
Realizada: Quando teve sucesso na operação
Recusada: Quando teve falha na operação
Estabelecida: Quando foi realizada ou recusada

nos decidimos se será realizada ou recusada
*/

let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 0
}

const velocityAfter2Seconds = (velocity, acceleration) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
        if(acceleration > 0){
            velocity += acceleration *2
            console.log(`Nova velocidade: ${velocity}`)
            resolve(velocity)
        } else {
            console.log("Aceleração Inválida")
            reject("Não possui aceleração")
        }
        }, 1000)
    })
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then(velocity => { // essa função anonima do then recebe justamente o retorno do resolve
    komodoShip.velocity = velocity
    console.log("Depois de acelerar:\n", komodoShip)
}).catch(message => {
    console.log(`Komodo: ${message}`)
})

console.log("Execução de Promises")
console.log(komodoShip)