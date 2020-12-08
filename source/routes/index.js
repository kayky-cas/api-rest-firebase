/**
 * Arquivo que gerencia as rotas da aplicação
 * @author Kayky Casagrande & João Cirne
 * @date 04/12/2020
 */

const express = require('express');

const router = express.Router();

router.use('/livros', require('./get'));
router.use('/livros', require('./post'));
router.use('/livros', require('./delete'));
router.use('/livros', require('./put'));

router.get('/', (require, response) => {
    response.json({message: "Está API foi feita com o intuito de apresentação do trabalho sobre o Cloud Firestore"});
});


module.exports = router;