/**
 * Arquivo que adiciona mais livros
 * @author Kayky Casagrande & João Cirne
 * @date 06/12/2020
 */

const express = require('express');

const router = express.Router();

const db = require('../../database/connect');

router.use(express.json());
router.use(express.urlencoded());

router.post('/', async (require, response) => {

    await db.collection('livros').add(require.body);

    response.json({message: "adicionado"})
});


module.exports = router;