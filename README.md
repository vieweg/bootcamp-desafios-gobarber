# Go Barber - Aplicação desenvolvida em NODE.JS - no BootCamp Rocketseat
Aplicação desenvolvida em NODE.JS
Uma agenda com profissionais e usuarios, onde você pode se cadastrar como prestador de serviços ou usuário comum.
Apos efetuar o cadastro, você faz o login com email e senha e pode agendar procedimentos com os usuarios cadastrados como profissionais.

Aplicação simples, somente para aprendizado, contemplando: conexão com DB, rotas, session, midlewares, upload de arquivos, templates nunjunck e outras especificações.

### Requisitos

Ambiente de desenvolvimento para node.js instalado e conexão com o banco de dados(mysql), arquivo com os parametros do banco se encontra em:

`src/config/databse.js`

### instalação

Clone o repositório

`git clone git://github.com/vieweg/gobarber.git`

Acesse o diretório

`cd gobarber`

Instale as dependências

`yarn install`

Rode as migrations

`npx sequelize db:migrate`

Execute o servidor

`yarn start`

Acesse no navegador `http://localhost:3001`
