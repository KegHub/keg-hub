const isValidUrl = str => {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return regexp.test(str);
};

export { isValidUrl as i };
//# sourceMappingURL=isValidUrl-18654cdf.js.map
