import autores from "../models/Autor.js";

class AutorController {
    static listarAutores = (_req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    static listarAutoresId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({message: `${err.message} - Id do autor não encontrado.`});
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutores = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar autores.`});
            } else {
                res.status(201).send(autor.toJSON());   
            }
        })
    }

    static atualizarAutores = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err)=> {
            if(!err) {
                res.status(200).send({message: "autores atualizado com sucesso."});
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar autores.`});
            }
    })
  }

    static removerAutores = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "autores removido com sucesso."});
            } else {
                res.status(500).send({message: `${err.message} - falha ao remover autores.`});
            }
        })
    }
}

export default AutorController;