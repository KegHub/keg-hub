'use strict';

const isValidUrl = str => {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return regexp.test(str);
};

exports.isValidUrl = isValidUrl;
//# sourceMappingURL=isValidUrl-a77135f0.js.map
