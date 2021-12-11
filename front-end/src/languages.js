// import { DangerZone } from 'expo'
// const { Localization } = DangerZone
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

/******Using normal object method */
const localizedStrings = {
  en_GB: { title: "Hello", subtitle: 'こんにちは' },
  es_ES: { title: "Hola", subtitle: "Bienvenido" }
}
/****************************************** */

/************Using a module (i18n) *****/
i18n.translations = {
  en: { welcome: 'Hello', name: 'Charlie' },
  ja: { welcome: 'こんにちは' },
  ar: {welcome: 'سأذهب إلى السوق'}
};
// Set the locale once at the beginning of your app which is the language of set in your phone.
i18n.locale = Localization.locale; 
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;
/**************************************************** */

export{
  i18n, localizedStrings
} 
