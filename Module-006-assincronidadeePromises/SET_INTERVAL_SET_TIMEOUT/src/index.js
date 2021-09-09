let timeoutId = setTimeout(() => {
    console.log("Após 2 seg")
}, 2000)

clearTimeout(timeoutId)  // cancela a execução
let seconds = 0

let intervalId = setInterval(() => {
    seconds += 2
    console.log(`Executando após ${seconds} seg`)
    if(seconds >= 10) clearInterval(intervalId)
}, 2000)