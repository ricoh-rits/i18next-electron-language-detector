import { app } from 'electron';

export default {
  'init' : Function.prototype,
  'type' : 'languageDetector',
  'detect' : () => app.getLocale(),
  'cacheUserLanguage' : Function.prototype
};
