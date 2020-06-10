import notaDAO from '../../model/nota/dao.js';
import jwt from 'jsonwebtoken'
import HTTPError from 'http-errors';
import usuarioDAO from '../../model/usuario/dao.js';

// creo un metodo para sacer el parametro autorizacion de la cabecera
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer'))
        return authorization.substring(7);

    return null;
}


const listar = async (req, res, next) => {

    try {
        const token = getTokenFrom(req)
        const decodedToken = jwt.verify(token, process.env.SECRET);
        if (!token || !decodedToken.id) {
            next(HTTPError(401, { error: 'token no existe o no es valido' }))

        } else {
            // buscamos el usuario de la coleccion usuarios
            //const usuario = await usuarioDAO.encontrarUsuario({ _id: decodedToken.id })

            const notas = await notaDAO.listar({ 'usuario': decodedToken.id });
            res.status(201).json(notas);
        }


    } catch (error) {
        next(error);
    }
}

export default listar;




