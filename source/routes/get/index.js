/**
 * Arquivo que envia os livros
 * @author Kayky Casagrande & João Cirne
 * @date 06/12/2020
 */

const express = require('express');

const router = express.Router();

const db = require('../../database/connect');



router.get('/', async (require, response) => {

    const snapshot = await db.collection('livros').get();
    let livros = [];


    if (snapshot.docs.length > 0) {
        snapshot.docs.forEach((livro) => {
            const livroS = {
                id: livro.id,
                data: livro.data()
            }

            livros.push(livroS);
        });
    }
    
    response.json(livros);
});


module.exports = router;