import { DEFAULT_SYNC_DEFAULT,DEFAULT_ASYNC_DEFAULT,DEFAULT_CLEAR_DATA } from './constants';

const initState = {
  name: '',
  asyncName: '...'
};

export default function defaultReducers(state = initState, action){
  const { type, payload } = action;
  switch (type){
    case DEFAULT_SYNC_DEFAULT:
      return { ...state, name: payload.data }
    case DEFAULT_ASYNC_DEFAULT:
      return { ...state, asyncName: payload.data}
    case DEFAULT_CLEAR_DATA:
      return { ...state, name: '', asyncName: ''}
    default:
      return { ...state}
  }
}