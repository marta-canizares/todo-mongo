import Router from 'express';

import crear from '../controller/nota/crear.js';
import listar from '../controller/nota/listar.js';

const router = Router();

router.route('/nueva')
      .post(crear);


router.route('/lista')
       .get(listar);      

export default router;      