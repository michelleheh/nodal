var Nodal = require('../core/module.js');

var Database = Nodal.Database;
var dbCredentials = require('./db/credentials.js');

function testDatabase(adapter) {

  var cfg = dbCredentials[adapter];

  var db = new Database(cfg);

  /* Test Migrations */

  var testMigration = new Nodal.Migration();

}
