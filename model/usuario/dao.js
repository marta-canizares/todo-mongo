import conexion from '../../mongo.js';
import ModeloUsuario from './modelo.js';


class UsuarioDAO {

    constructor(){}

    registrar(usuario){

        return new ModeloUsuario(usuario).save();
    }

    listar(){
        return ModeloUsuario.find({});
    }

}

export default new UsuarioDAO;
