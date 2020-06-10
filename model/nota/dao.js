import conexion from '../../mongo.js';
import ModeloNota from './modelo.js';


class NotaDAO {

    constructor() { }

    crear(nota) {

        return new ModeloNota(nota).save();
    }

    listar(usuario) {
        return ModeloNota.find(usuario)
    }

    listarTodos() {
        return ModeloNota.find({}).populate('usuario', { usuario: 1, _id: 0 })
    }
}

export default new NotaDAO;
