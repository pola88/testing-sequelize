var Sequelize = require('sequelize');

var squelizeOptions = {
  host: "localhost",
  port: 5432,
  dialect: 'postgres',
  native: true,
  logging: false,
  define: {
    underscored: true,
    syncOnAssociation: false
  }
};

var sequelize = new Sequelize('testing_sequelize', 'pola', '', squelizeOptions);

var pgAdmin = {
  cleanDb: function(callback) {
    var that = this;
    sequelize.options.logging = false;
    var query = 'TRUNCATE users RESTART IDENTITY CASCADE';

    sequelize.query( query )
              .then(function() {
                query = 'TRUNCATE persons RESTART IDENTITY CASCADE';
                sequelize.query( query )
                        .then(function() {

                          callback();
                        }, function(error) {
                          console.log('error');
                          return that.fail('error running query ' + error, callback);
                        });
              }, function(error) {
                console.log('error');
                return that.fail('error running query ' + error, callback);
              });
  },
  fail: function(msg, callback) {
    if(typeof callback === 'function') {
      return callback(msg);
    } else {
      return console.error(msg);
    }
  }
};

exports.pgAdmin = pgAdmin;
