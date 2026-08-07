import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App {
  constructor() { // sempre que for criado vai chamar o contructor todo,incluindo as funções
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app; // exporta a classe ja criada
