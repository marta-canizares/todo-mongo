import notaDAO from '../../model/nota/dao.js';

const listarTodos = async (req, res, next) => {

    try {

        const notas = await notaDAO.listarTodos();
        res.status(201).json(notas);

    } catch (error) {
        next(error);
    }
}

export default listarTodos;