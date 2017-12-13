import { url } from 'dingtalk-javascript-utility';
import { GLOBALS_SET_CORPID } from './constants';

const setCorpId = () => ({
  type: GLOBALS_SET_CORPID,
  payload: {
    data: url.parse(location.href,'corpId')
  }
});

export function fetchCorpId (dispatch){
  dispatch(setCorpId());
}
