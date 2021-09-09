const fs = require('fs')
//cria e popula arquivo
fs.writeFile('teste.txt', 'Felippe é Legal', erro =>{
    console.log(erro)
})


//cria e/ou popula o arquivo
fs.appendFile('teste2.txt', 'Felippe é Legal\n ', erro =>{
    console.log(erro)
})

/*Renomeia arquivo!
fs.rename('teste.txt', 'teste3', erro =>{
    console.log(erro)
})*/

//Remove o arquivo
fs.unlink('teste3', erro => console.log(erro))


//caminho para o diretório atual
console.log(__dirname)


