const spaceship = {
    name: "Rontaro",
    currentBateryCharge: 50,
    consumptionPerKms: 0.00008
  }
  
  const updateBateryCharge = function(chargeConsumed) {
    return new Promise((resolve, reject) => {
      spaceship.currentBateryCharge -= chargeConsumed
      if(spaceship.currentBateryCharge > 0) {
        resolve(spaceship.currentBateryCharge)
      } else {
        reject("Bateria esgotada! Nave será desativada em alguns segundos.")
      }
    })
  }
  
  const calculateBateryConsumption = function(velocity, seconds) {
    return new Promise((resolve, reject) => {
      if(spaceship.consumptionPerKms <= 0 || velocity <= 0) {
        reject("Nave está parada!")
      } else {
        let chargeConsumed = spaceship.consumptionPerKms * velocity * seconds
        resolve(chargeConsumed)
      }
    })
  }
  

  calculateBateryConsumption(0,300).then(chargeConsumed => {
      return updateBateryCharge(chargeConsumed)
  }).then(newCharge => {
        console.log(`Carga Atual: ${newCharge}`)
    }).catch(error => { // esse catch captura qualquer erro que seja dado em qualquer promise
        console.log(error)
    })