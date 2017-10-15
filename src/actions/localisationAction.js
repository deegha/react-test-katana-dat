import * as types from './actionTypes';

export function localisationSetLangPack(langPack) {  
    return {type: types.LOCALISATION_SET_LANG_PACK, langPack};
}
