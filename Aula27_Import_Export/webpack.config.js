// arquivo de configuração do webpack

const path = require('path'); // commomJS
// tem que exportar esse aruqivo para quem está de fora poder usar

module.exports={ //tudo que tiver aqui vai ser exportado
    mode:'development' ,
    entry:'./src/index.js' ,//aquivo de entrad,
    output:{
        path:path.resolve(__dirname,'public', 'assets', 'js'),
        filename:'bundle.js'
    },
    module:{
    rules:[{
    exclude:/node_modules/, //webpack nao vai analisar o node
    test: /\.js$/ ,
    use:{
        loader:'babel-loader',
        options:{
            sourceType: 'unambiguous', 
           presets:[
               ['@babel/preset-env', {
                   useBuiltIns: 'usage',
                   corejs: 3,
                   modules:'commonjs'
               }]
           ]
        }
    }



}]

    },
    devtool:'source-map' // ajuda a localizar o erro no local original
};
