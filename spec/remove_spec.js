var pgAdmin = require('./pgAdmin').pgAdmin;

describe('Clean all db', function() {
  it('remove All', function(done) {
    pgAdmin.cleanDb(done);
  });
});
