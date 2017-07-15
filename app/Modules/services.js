'use strict';

const esdf = require('esdf');
const registerUser = require('../DomainServices/registerUser');

module.exports = function () {
    // this.requires('config');
    this.requires('repository');
    // this.requires('authDB');
    this.provides('services', function ({config, repository, authDB}) {
      const serviceContainer = new esdf.services.ServiceContainer();
      // serviceContainer.addResource('config', config);
      serviceContainer.addResource('repository', repository);
      // serviceContainer.addResource('authDB', authDB);
      serviceContainer.addService('registerUser', registerUser);

      return serviceContainer;
    });
};
