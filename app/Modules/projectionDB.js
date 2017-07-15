'use strict';

const firebase = require('firebase');

module.exports = function () {
  this.provides('projectionDB', function () {
    const config = {
      apiKey: "AIzaSyB805Uo_JmFzuSSh_FvPIt-TuPnmVvb55g",
      authDomain: "workshop-8-social-network.firebaseapp.com",
      databaseURL: "https://workshop-8-social-network.firebaseio.com",
      projectId: "workshop-8-social-network",
      storageBucket: "workshop-8-social-network.appspot.com",
      messagingSenderId: "947217864495"
    };
    const app = firebase.initializeApp(config);
    const db = app.database();
    return app.auth().signInWithEmailAndPassword(process.env.email, process.env.password).then(() => {
      return db;
    })
  });
}
