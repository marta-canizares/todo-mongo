import notaDAO from '../../model/nota/dao.js';

const listar = async (req,res,next) => {

    try {
        
        const notas = await notaDAO.listar();
        res.status(201).json(notas);

    } catch (error) {
        next(error);
    }
}

export default listar;