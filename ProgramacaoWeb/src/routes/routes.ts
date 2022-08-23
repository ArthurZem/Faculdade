import { Router } from 'express';
import hotelController from '.src/controllers/hotel';
import quartoController from './controller/quarto';
import telefoneController from './controller/telefone';
import enderecoController from './controller/endereco';

const routes = Router();

routes.get('/', (req, res) => {
return res.send('Hello World');
})

routes.get('/hotels', hotelController.index); // para obter todos os hoteis
routes.get('/hotel/:id', hotelController.get); // para obter um hotel pelo campo id
routes.put('/hotel/:id', hotelController.add); // para altera os atributos o hotel pelo campo id
routes.delete('/hotel/:id', hotelController.delete); // para deletar (apagar) um hotel pelo campo id
routes.post('/hotel/:id', hotelController.update); // para criar (incluir) um hotel pelo campo id

routes.get('/quartos', quartoController.index);
routes.get('/quarto/:id', quartoController.get);
routes.put('/quarto/:id', quartoController.add);
routes.delete('/quarto/:id', quartoController.delete);
routes.post('/quarto/:id', quartoController.update);

routes.get('/telefones', telefoneController.index);
routes.get('/telefone/:id', telefoneController.get);
routes.put('/telefone/:id', telefoneController.add);
routes.delete('/telefone/:id', telefoneController.delete);
routes.post('/telefone/:id', telefoneController.update);

routes.get('/enderecos', enderecoController.index);
routes.get('/endereco/:id', enderecoController.get);
routes.put('/endereco/:id', enderecoController.add);
routes.delete('/endereco/:id', enderecoController.delete);
routes.post('/endereco/:id', enderecoController.update);

export default routes;