var environments = {};

environments.staging = {
  'version' : '1.0.0',
  'codeName' : 'Rinjani',
  'httpPort' : 17935,
  'httpsPort' : 17953,
  'envName' : 'staging',
  'subModuleDirectory' : '/app_modules',
  'pgHost': 'localhost',
  'pgPort': 5432,
  'pgUsername': 'pg_user',
  'pgPassword': 'pg_user_password',
  'pgDatabase': 'database_name',
  'sqliteDBFile': 'webworx.db',
  'hashingPairs' : 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'hashingSecret' : 'b144700387101111f02422bf234266affcd786eb15289d695b412c0587243947'
};

environments.production = {
  'version' : '1.0.0',
  'codeName' : 'Rinjani',
  'httpPort' : 17935,
  'httpsPort' : 17953,
  'envName' : 'production',
  'subModuleDirectory' : '/app_modules',
  'pgHost': 'localhost',
  'pgPort': 5432,
  'pgUsername': 'pg_user',
  'pgPassword': 'pg_user_password',
  'pgDatabase': 'database_name',
  'sqliteDBFile': 'webworx.db',
  'hashingPairs' : 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'hashingSecret' : 'b144700387101111f02422bf234266affcd786eb15289d695b412c0587243947'
};
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;
module.exports = environmentToExport;
