import usuarioDAO from '../../model/usuario/dao.js';
import bcrypt from 'bcrypt';


const registrar = async (req, res, next) => {

    try {

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
        console.log(passwordHash);

        const usuario = await usuarioDAO.registrar({
            usuario: req.body.usuario,
            password: passwordHash
        });

        res.status(201).json(usuario);

    } catch (error) {
        next(error);
    }

}

export default registrar;