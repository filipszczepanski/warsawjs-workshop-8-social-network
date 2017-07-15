'use strict';

const User = require('./User');
const assert = require('assert');

describe('#constructor', () => {
  it('should not register the user right away', () => {
    const user = new User();
    assert.equal(user.isRegistered(), false);
  });
});

describe('#register', () => {

  it('should make the user registered', () => {
    const user = new User();
    return user.register({
      name: 'Filip',
      email: 'flamper@gmail.com',
      password: '12345'
    }).then(() => {
      assert.equal(user.isRegistered(), true);
    });
  });

  it('should created proper name', async () => {
    const user = new User();
    const fakeField = {
      name: 'Filip',
      email: 'flamper@gmail.com',
      password: '12345'
    };
    await user.register(fakeField);
    assert.equal(user.getName(), fakeField.name);;
  });

  it('should be idempotent', async () => {
    const user = new User();
    return user.register({
      name: 'Filip',
      email: 'flamper@gmail.com',
      password: '12345'
    });
    const beforeCount = user.getStagedEvents().length;
    await user.register({
      name: 'Filip',
      email: 'flamper@gmail.com'
    });
    const afterCount = user.getStagedEvents().length;
    assert.equal(beforeCount, afterCount);
  });

});
