'use strict';

const esdf = require('esdf');
const bcrypt = require('bcrypt');

class User extends esdf.core.EventSourcedAggregate {
  constructor() {
    super();

    this._name = null;
    this._email = null;
    this._registered = false;
  }

  async register({name, email, password}) {
    if (this._registered) {
      return;
    }


    const hash = await bcrypt.hash(password, 10);
    this._stageEvent(new esdf.core.Event('Registered', {
       name,
       email,
       hash
     }));
  }


  onRegistered(event) {
    this._name = event.eventPayload.name;
    this._email = event.eventPayload.email;
    this._registered = true;
  }

  getName() {
    return this._name;
  }

  isRegistered() {
    return this._registered;
  }
}
module.exports = User;
