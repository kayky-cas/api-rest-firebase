/**
 * Arquivo onde acontece a conexão com o banco de dados
 * @author Kayky Casagrande & João Cirne
 * @date 04/12/2020
 */

const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(require('../config/firebase.json')),
  databaseURL: "https://livraria-angular.firebaseio.com"
});

module.exports = admin.firestore();

