'use-strict';
const modules = [
  require('./Modules/sink'),
  require('./Modules/repository')
];

const {CompositionManager} = require('app-compositor');
const app = new CompositionManager();

app.runModules(modules).done(async function ({repository}) {
  const User = require('./Entities/User');
  await repository.invoke(User, 'b77eeb88-ba4b-51d2-be67-9f15ac802bbe', async function (user) {
    await user.register({name: 'Filip', email: 'flamper@gmail.com', password: '*****'});
    console.log('isRegistered: %s', user.isRegistered());
  });


  repository.invoke(User, 'b77eeb88-ba4b-51d2-be67-9f15ac802bbe', async function (user) {
    console.log('is still registered: %s', user.isRegistered());
  });

});
