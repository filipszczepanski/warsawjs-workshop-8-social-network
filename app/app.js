'use-strict';

const modules = [
  require('./Modules/sink'),
  require('./Modules/repository'),
  require('./Modules/services'),
  require('./Modules/streamer'),
  require('./Modules/publisher'),
  require('./Modules/subscriber'),
  require('./Modules/projectionDB'),
  require('./Modules/projectionBuilder')
];

const {CompositionManager} = require('app-compositor');
const app = new CompositionManager();

app.runModules(modules).done(async function ({streamer, subscriber, services}) {
  streamer.start();
  subscriber.queue('eventLogger').bind('*.*').listen(function ({ event, commit }) {
    console.log('* %s.%s: %j', commit.aggregateType, event.eventType, event.eventPayload);
  })
  // const User = require('./Entities/User');
  const registerUser = services.service('registerUser');

  registerUser({
    userID: 'b77eeb88-ba4b-51d2-be67-9f15ac802bbe',
    name: 'Filip',
    email: 'flamper@gmail.com',
    password: '*****'});
});
