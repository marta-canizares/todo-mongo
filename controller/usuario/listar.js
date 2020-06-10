import usuarioDAO from '../../model/usuario/dao.js';

const listar = async (req,res,next) => {

    try {
        
        const usuarios = await usuarioDAO.listar();
        res.status(201).json(usuarios);

    } catch (error) {
        next(error);
    }
}

export default listar;