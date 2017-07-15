'use-strict';

const modules = [
  require('./Modules/sink'),
  require('./Modules/repository'),
  require('./Modules/services')
];

const {CompositionManager} = require('app-compositor');
const app = new CompositionManager();

app.runModules(modules).done(async function ({services}) {

  // const User = require('./Entities/User');
  const registerUser = services.service('registerUser');

  registerUser({
    userID: 'b77eeb88-ba4b-51d2-be67-9f15ac802bbe',
    name: 'Filip',
    email: 'flamper@gmail.com',
    password: '*****'});
});
