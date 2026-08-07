import { Router } from 'express'; // poruqe o router ta sendo criado aq no home controle e nao em outro lugar
// o que é o router
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
