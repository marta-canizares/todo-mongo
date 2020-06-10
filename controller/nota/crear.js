import notaDAO from '../../model/nota/dao.js';

const crear = async (req,res,next) =>{

    try {

        const nota = await notaDAO.crear(req.body);
        res.status(201).json(nota);
        
    } catch (error) {
        next(error);
    }

}

export default crear;