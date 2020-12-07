/**
 * Arquivo que envia os livros
 * @author Kayky Casagrande & João Cirne
 * @date 06/12/2020
 */

const express = require('express');

const router = express.Router();

const db = require('../../database/connect');



router.delete('/', async (require, response) => {

    await db.collection('livros').doc(require.body.id).delete();
    
    response.json({message: "deletado"});
});


module.exports = router;