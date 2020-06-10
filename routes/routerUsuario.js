import Router from 'express';

import registrar from '../controller/usuario/registrar.js';
import listar from '../controller/usuario/listar.js';


 const router = Router();

 router.route('/registra')
       .post(registrar);

       router.route('/lista')
       .get(listar);      

export default router;      