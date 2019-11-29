'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
exports.squelize = {
  enable: true,
  package:'egg-sequelize'
}