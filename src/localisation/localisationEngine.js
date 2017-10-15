import {English, Language} from './constants';
import {reactLocalStorage} from 'reactjs-localstorage';

class LocalisationEngine{  
  static loadLanguage() {
    let lang = reactLocalStorage.get('Lang', true);
    
    if(!lang || lang === "")
       lang = Language.en;
    switch(lang) {
      case Language.en:
        return English;
      default: 
        return English;
    }
  }
}

export default LocalisationEngine;  