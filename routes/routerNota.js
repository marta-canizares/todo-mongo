import Router from 'express';

import crear from '../controller/nota/crear.js';
import listar from '../controller/nota/listar.js';
import listarTodos from '../controller/nota/listarTodos.js';

const router = Router();

router.route('/nueva')
      .post(crear);


router.route('/lista')
      .get(listar);

router.route('/lista/todos')
      .get(listarTodos);

export default router;      