const path = require("path")
module.exports = {
    entry: {
        index: './src/index.js',
        galaxy: './src/galaxy.js'
    },

    output: {
        filename: "[id].bundle.js", //para gerar a saída do webpack com [name] o mesmo da entry só que com .bundle.js
        path: path.resolve(__dirname, 'dist') // oonde vai salvar,  no caso diretorio atual concatenado com dist
    },

    module: {
        rules: [
            {
                test: /\.js$/, //percorre e procura todo que tem .js
                use: ['babel-loader']  // executa o loader
            }

        ]
    },

    watch: true, 
    //serve para fazer varredura nos arquivos e qualquer alteração executa novamente
    devServer:{ //chave de configuração do servidor
        contentBase: path.join(__dirname, "dist"),
        wathContentBase: true, 
        liveReload: true // verifica a pasta descrita e se tiver recarrega o navegador atualizando webpack ai adicionado chave start no packt jason
    }
}