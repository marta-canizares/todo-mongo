import usuarioDAO from '../../model/usuario/dao.js';

const registrar = async (req,res,next) =>{

    try {

        const usuario = await usuarioDAO.registrar(req.body);
        res.status(201).json(usuario);
        
    } catch (error) {
        next(error);
    }

}

export default registrar;