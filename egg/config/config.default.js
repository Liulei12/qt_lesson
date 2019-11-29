/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575013427431_6722';

  // add your middleware config here
  config.middleware = [];
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '112233',
    database: 'instagram'
  }

  config.security = {
    csrf: {
      enable: false
    }
  };
  config.password_secret = 'ps1234secr'
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  
  return {
    ...config,
    ...userConfig,
  };
};
