import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Conexão com o banco de dados realizada com sucesso.')
})

const app = express();
app.use(express.json());
routes(app);

export default app;
 
// import livros from './models/Livro.js';

// const livros = [
//     {id: 1, "titulo": "O Senhor dos Anéis"},
//     {id: 2, "titulo": "Harry Potter"}
// ]    

// app.get('/', (_req, res) => {
//     res.status(200).send('Curso de Node');    
// })   

// app.get('/livros/:id', (req, res) => {
//     let index = buscarLivro(req.params.id);
//     res.json(livros[index]);    
// }) 

// app.post('/livros', (req, res) => {
//     livros.push(req.body);
//     res.status(201).send('Livro adicionado com sucesso!')
// })    

// app.put('/livros/:id', (req, res) => {
//     let index = buscarLivro(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.json(livros);    
// })   

// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params;
//     let index = buscarLivro(id);
//     livros.splice(index, 1)
//     res.send(`Livro ${id} removido com sucesso.`);    
// }) 

// function buscarLivro(id) {
//     return livros.findIndex(livro => livro.id == id)
// }    
