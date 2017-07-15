const User = require('../Entities/User');

module.exports = function registeruser({repository, config}, params) {
  return repository.invoke(User, params.userID, function (userInstance) {
    return userInstance.register(params, { config });
  })
};
