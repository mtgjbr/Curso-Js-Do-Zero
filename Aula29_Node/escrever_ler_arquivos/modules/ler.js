const fs = require ('fs').promises;

module.exports = (caminho) => fs.readFile(caminho,'utf-8') //retonrna promisse pq ta usando ela la em cima