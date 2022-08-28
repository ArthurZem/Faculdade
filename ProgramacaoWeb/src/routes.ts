import {Router} from 'express';
import CardapioController from './controllers/CardapioController';
import equipamentoController from './controllers/ClienteController';
import veiculoController from './controllers/GarcomController';
import PedidoController from './controllers/PedidoController';

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Hello World');
})

routes.get('/atendimentos', CardapioController.index); // para obter todos os atendimento
routes.get('/atendimento/:id', CardapioController.get); // para obter um atendimento pelo campo id
routes.put('/atendimento/:id', CardapioController.add); // para altera os atributos o atendimento pelo campo id
routes.delete('/atendimento/:id', CardapioController.delete); // para deletar (apagar) um Atendimento pelo campo id
routes.post('/atendimento/:id', CardapioController.update); // para criar (incluir) um Atendimento pelo campo id

routes.get('/equipamentos', equipamentoController.index);
routes.get('/equipamento/:id', equipamentoController.get);
routes.put('/equipamento/:id', equipamentoController.add);
routes.delete('/equipamento/:id', equipamentoController.delete);
routes.post('/equipamento/:id', equipamentoController.update);

routes.get('/veiculos', veiculoController.index);
routes.get('/veiculo/:id', veiculoController.get);
routes.put('/veiculo/:id', veiculoController.add);
routes.delete('/veiculo/:id', veiculoController.delete);
routes.post('/veiculo/:id', veiculoController.update);


export default routes;