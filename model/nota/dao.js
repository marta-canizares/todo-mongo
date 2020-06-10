import conexion from '../../mongo.js';
import ModeloNota from './modelo.js';


class NotaDAO {

    constructor(){}

    crear(nota){

        return new ModeloNota(nota).save();
    }

    listar(){
        return ModeloNota.find({});
    }

}

export default new NotaDAO;
