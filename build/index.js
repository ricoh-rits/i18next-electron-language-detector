'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electron = require('electron');

exports.default = {
  'init': Function.prototype,
  'type': 'languageDetector',
  'detect': function detect() {
    return _electron.app.getLocale();
  },
  'cacheUserLanguage': Function.prototype
};
module.exports = exports['default'];