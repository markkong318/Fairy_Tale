import { GLOBALS_SET_CORPID } from './constants';

const initialState = {
  corpId: null
}

export default function globalsReducers(state=initialState,action){
  const { type, payload } = action;
  switch(type){
    case GLOBALS_SET_CORPID:
        return { ...state, corpId: payload.data };
      break;
    default:
        return { ...state }
      break;
  }
}