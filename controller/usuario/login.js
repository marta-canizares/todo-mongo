import usuarioDAO from '../../model/usuario/dao.js';
import bcrypt from 'bcrypt'
import HTTPError from 'http-errors';
import jwt from 'jsonwebtoken';

const login = async (req, res, next) => {

    try {
        // comprobamos si existe el usuario
        const usuario = await usuarioDAO.encontrarUsuario({ usuario: req.body.usuario });

        // si exite el usuario, comparo si el password coincide
        const passwordCorrecta = usuario === null ? false : await bcrypt.compare(req.body.password, usuario.password)

        // si el usuario o el password son incorrectos, devolvemos un error
        if (!(usuario && passwordCorrecta)) {
            next(HTTPError(401, { mensaje: 'usuario o password incorrecto' }))
        } else {
            // si no hay error, generamos el token   

            // construir el token
            const usuarioToken = {
                usuario: usuario.usuario,
                id: usuario._id
            }
            const token = jwt.sign(usuarioToken, process.env.SECRET)

            // enviamos el token al cliente
            res.status(201).json({ token, usuario: usuario.usuario, email: usuario.email });
        }

    } catch (error) {
        next(error);
    }
}

export default login;





/* const passwordCorrecta:

 if (usuario === null) {
     false;
 } else { // con esto comparo
     const passwordCorrecta = await bcrypt.compare(req.body.password, usuario.password)
 }*/


        // comparo que el usuario exista 