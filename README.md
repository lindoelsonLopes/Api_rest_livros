Desenvolvimento de uma API REST com Node.js e MongoDB

Neste projeto, foi desenvolvido uma API REST com Node.js e MongoDB para gerenciar recursos como livros e autores. Utilizamos o padrão de arquitetura MVC para separar os arquivos em pacotes específicos, de acordo com um objetivo em comum, como models, controllers e routes.

Para tornar o código mais intuitivo e descritivo sobre o que será executado para cada rota, criamos uma classe com métodos estáticos para ser usada no arquivo de rotas.

Utilizamos a biblioteca mongoose para a manipulação dos dados no banco, como find, findById, findByIdAndUpdate e findByIdAndDelete. Além disso, incluímos um novo schema e facilmente o vinculamos ao arquivo index.js para que o novo endpoint seja reconhecido e esteja operante rapidamente.

Para associar dados entre duas coleções do banco, fizemos com que ao recuperar os dados do livro, por exemplo, já fossem demonstrados todos os dados cadastrados no endpoint de autores. Utilizei o comando populate() para fazer a associação de dados, determinando campos específicos ou selecionando todos os dados do recurso.

Também criei uma busca de dados por um campo que não é o identificador único do documento, como a editora, e usei o recurso de passar no próprio endpoint o valor do parâmetro que servirá como critério de busca.

Para testar nossa API, utilizei o Postman, que nos permitiu enviar requisições HTTP aos endpoints e verificar as respostas recebidas.

Ao final, foi desenvolvido um CRUD completo de dois recursos (livros e autores), criamos consultas personalizadas por campo e com associação de dados de um recurso na rota que busca o outro recurso.