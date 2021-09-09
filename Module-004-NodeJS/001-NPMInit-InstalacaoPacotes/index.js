/* Foi feito o seguinte iniciado NPM 
comando usado no prompt na pasta: npm init
package name: (001-- npminiteinstalacaopacotes) npm_class
version: (1.0.0)
description: Aula para estudar NPM
entry point: (index.js)
test command:
git repository:
keywords: NPM, class, study
author: Felippe Ribeiro
license: (ISC)
Is this OK? (yes)

Feito isso ele cria o package.json

depois instalei um pacote
npm install moment --save

o --save serve para mapear o pacote como dependencia do projeto
*/

const today = moment().format("DD/MM/YYYY")
alert(`Data atual: ${today}`)