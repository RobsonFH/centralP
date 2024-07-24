import {Router} from 'express'
import { listarCadastros } from './useCases/listarCadastros';
import { cadastrarUsuario } from './useCases/cadastrarUsuario';

export const router = Router()
router.get('/', (req, res) => {
  res.send('Hello');
});
router.get('/galdino', (req, res) => {
    res.send('toma');
  });

router.get('/cadastros', listarCadastros)
router.post('/cadastros', cadastrarUsuario)
